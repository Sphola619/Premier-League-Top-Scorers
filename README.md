![image](https://github.com/user-attachments/assets/88edff0a-cb02-45cb-826f-b8b629a88c69)


# Premier League Top Scorers App

This is a full-stack application that displays the top scorers in the Premier League. The backend is built with Node.js and Express, and the frontend is built with React. The application fetches data from the Football-Data.org API.

## Features

- Display top 10 scorers in the Premier League
- Search for a player by name
- Display player details including name, goals, position, club, and date of birth

## Prerequisites

- Node.js and npm installed on your machine
- An API key from Football-Data.org

## Getting Started

### Backend

1. **Navigate to the backend directory**:
   ```sh
   cd /top-premier-league-scorers/backend

2. **Install dependencies**:
   
   npm install

3. **Create an API key**:

   - Go to Football-Data.org
   - Sign up for an account if you don't have one
   - Generate an API key

4. **Create a .env file in the backend directory based on the sample_env file and add your API key**:

   - cp sample_env .env

   **Then, open the .env file and replace your_api_key_here with your actual API key**:

    API_KEY=your_actual_api_key

5. **Start the backend server**:

   npm start

   The backend server will start on http://localhost:5000


**Frontend**

1. **Navigate to the frontend directory**

2. **Install dependencies**:

   npm install

3. **Start the frontend development server**:

   npm start

   The frontend development server will start on http://localhost:3000


**Usage**

   - Open your browser and navigate to http://localhost:3000
   - Enter a Premier League player's name in the search input to get their goals, position,  club, and date of birth.
   - The backend will the return the player's details only if they are in the top 10 scorers list this season.

**License**

This project is licensed under the MIT License.


This `README.md` file provides an overview of the project, instructions for setting up and running the backend and frontend, and a brief explanation of the project structure. It also includes instructions for new users on how to create an API key from Football-Data.org and set it up in the `.env` file.

If you have any further questions or need additional assistance, please let me know!


