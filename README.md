
# Project Setup Instructions

This guide will help you get the project up and running on your local machine for development and testing purposes.
python_version:3.10
node_version:18.18.2

## Cloning the Project

Start by cloning the repository to your local machine:

```bash
git clone <repository-url>
```

### Setting Up the Backend

1. **Navigate to the Backend Directory**:

```bash
cd back
```

2. **Create and Configure the .env File**:

Copy the contents from `env.example` to a new `.env` file:

```bash
cp env.example .env
```

3. **Set Up the Python Virtual Environment**:

```bash
python -m venv venv
source venv/bin/activate
```

4. **Install Required Dependencies**:

```bash
pip install -r requirements.txt
```

5. **Run the Backend Application**:

```bash
python app.py
```

### Setting Up the Frontend

1. **Navigate to the Frontend Directory**:

```bash
cd front
```

2. **Create and Configure the .env File**:

Copy the contents from `env.example` to a new `.env` file:

```bash
cp env.example .env
```

3. **Install Required npm Packages**:

```bash
npm install
```

4. **Run the Frontend Application**:

```bash
npm run dev
```

## Notes

- Make sure to replace `<repository-url>` with the actual URL of your project repository.
- Follow the on-screen instructions to access the application once both the backend and frontend servers are running.
