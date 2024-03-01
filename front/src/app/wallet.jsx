
"use client";
import React, { useState } from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';
const  backend_url=process.env.NEXT_PUBLIC_BACKEND_URL


const WalletConnectComponent = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState(null);
  const [signedMessage, setSignedMessage] = useState("");
  const [network, setNetwork] = useState("");
  const [signatureStatus,setSignatureStatus]=useState("");
  const verifySignatureEndpoint = `${backend_url}/verify-signature`;

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.REACT_APP_INFURA_ID // Ensure this is set in your .env file
      }
    }
  };

  const connectWallet = async () => {
    console.log("Attempting to connect wallet...");
    const web3Modal = new Web3Modal({
      network: "mainnet", // This can be dynamic based on the application's needs
      cacheProvider: true,
      providerOptions
    });

    try {
      const instance = await web3Modal.connect();
      const tempProvider = new ethers.providers.Web3Provider(instance);
      //const tempProvider =new ethers.BrowserProvider(window.ethereum);
      const tempSigner = tempProvider.getSigner();
      const tempNetwork = await tempProvider.getNetwork();
      // Retrieve the signer's address
      //const tempAddress = await signer.getAddress();

      setProvider(tempProvider);
      setSigner(tempSigner);
      setNetwork(tempNetwork.name); // Sets the current network
      //console.log("the signer address ====== ", address)

    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const signMessage = async () => {
    if (!signer) return;
    const message = "Please sign this message to verify your identity.";
    try {
      const signature = await signer.signMessage(message);
      const tempAddress = await signer.getAddress();
      setSignedMessage(signature);
      // Send the data to your backend for verification
      const verificationData = {
        signature,
        message,
        address:tempAddress,
        network: network
      };

      const response = await fetch(verifySignatureEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(verificationData),
      });

      const responseData = await response.json();
      if (response.ok) {
        // Handle successful verification
        console.log("Signature verified successfully", responseData);
        setSignatureStatus("Signature verified successfully")
        // Optionally, update state or UI based on successful verification
      } else {
        // Handle failed verification
        console.error("Signature verification failed", responseData);
        setSignatureStatus("Signature verification failed")
        // Optionally, update state or UI to reflect the failure
      }
      // Here, you can also include code to send the signature and message to your backend for verification
    } catch (error) {
      console.error("Error signing message:", error);
    }
  };

  return (
    <div>
    <button 
      onClick={connectWallet} 
      style={{ padding: '10px 20px', fontSize: '16px', margin: '5px' }}
    >
      Connect Wallet
    </button>
    {signedMessage ? (
      <div>
        <p>Status: {signatureStatus}</p>
      </div>
    ) : (
      <button 
        onClick={signMessage} 
        disabled={!signer} 
        style={{ padding: '10px 20px', fontSize: '16px', margin: '5px' }}
      >
        Sign Message
      </button>
    )}
  </div>
  );
};

export default WalletConnectComponent;
