🚀 MERN CRUD App (TypeScript)
This project is a full-stack CRUD (Create, Read, Update, Delete) application built using the MERN stack with TypeScript support on the frontend. It allows you to manage users with fields like Name, Email, and Roll #.

🛠️ Tech Stack
MongoDB – Database

Express.js – Backend Framework

React (with Vite + TypeScript) – Frontend

Node.js – Backend Runtime

Axios – API requests

Bootstrap – UI Styling

📸 Features
Create a new user

Read all users in a table

Update user details

Delete user from the list

Responsive UI

Clean and gradient-based design

🔧 Setup Instructions
📦 Backend
Navigate to the backend directory:

bash
Copy
Edit
cd server
Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
node index.js
Make sure MongoDB is running locally.

💻 Frontend
Navigate to the frontend (Vite + React + TS):

bash
Copy
Edit
cd client
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm run dev
📁 Folder Structure
bash
Copy
Edit
mern-crud-app/
├── client/        # React + TypeScript (Vite)
│   └── src/
│       └── assets/components/
│           ├── CreateUser.tsx
│           ├── Users.tsx
│           └── UpdateUser.tsx
├── server/        # Node + Express + MongoDB
│   ├── models/
│   │   └── crud.js
│   └── index.js
