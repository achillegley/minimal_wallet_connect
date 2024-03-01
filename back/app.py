from flask import Flask, request, jsonify
from flask_cors import CORS
from eth_account.messages import encode_defunct
from hexbytes import HexBytes

from web3 import Web3, HTTPProvider
import os
from dotenv import load_dotenv

app = Flask(__name__)

# Allow CORS for all domains on all routes
CORS(app)
# Load environment variables from .env file
load_dotenv()

# Retrieve the Infura URL from environment variables
INFURA_PROJECT_ID = os.getenv('INFURA_PROJECT_ID')

def ensure_hex_format(signature):
    # Check if the signature starts with '0x' and contains only hex digits
    if signature.startswith('0x') and all(c in '0123456789abcdefABCDEF' for c in signature[2:]):
        return signature.lower()  # Optionally, convert to lowercase for consistency
    
    # Attempt to correct common formatting issues
    if not signature.startswith('0x'):
        # Add '0x' prefix if missing and check again
        corrected_signature = '0x' + signature
        if all(c in '0123456789abcdefABCDEF' for c in corrected_signature[2:]):
            return corrected_signature.lower()
    
    # If the signature is still invalid, raise an error
    raise ValueError("The signature is not in a valid hexadecimal format.")

@app.route('/verify-signature', methods=['POST'])
def verify_signature():
    data = request.json

    # You can still receive the base URL or network choice from the frontend if needed
    network = data.get('network')  # Example: 'mainnet', 'ropsten', etc.
    network="mainet"
    # Construct the full Infura URL using the project ID
    infura_url = f"https://arbitrum-mainnet.infura.io/v3/{INFURA_PROJECT_ID}"

    print("===============================the url ", infura_url)
    # Initialize Web3 with the constructed Infura URL
    w3 = Web3(Web3.HTTPProvider(infura_url))

    signature=HexBytes(data.get('signature'))
    message = data.get('message')
    address = data.get('address')
    encoded_message = encode_defunct(text=message)

    
    print("the signature ================= ", signature)
    # Prepare the message for Ethereum signature verification
    #eth_signed_message = Web3.soliditySha3(['string'], [message])
    
    #recovered_address=w3.geth.personal.ecRecover(message, signature)
    recovered_address=w3.eth.account.recover_message(encoded_message, signature=signature)
    #recovered_address = w3.eth.account.recoverHash(message, signature=signature)

    # Check if the recovered address matches the provided address
    if recovered_address.lower() == address.lower():
        return jsonify({"verified": True}), 200
    else:
        return jsonify({"verified": False}), 401

if __name__ == '__main__':
    app.run(debug=True)
