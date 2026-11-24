import express from 'express';
import "dotenv/config"; // Load environment variables from .env file
import connectDB from './lib/db.js'; // Import the database connection function
import { clerkMiddleware } from "@clerk/express"; // Import the Clerk middleware 
import cors from 'cors'; // Import CORS middleware

const app = express();
const port = process.env.PORT;
const frontendUrl = process.env.FRONTEND_URL;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors({ origin: frontendUrl, credentials: true })); // Enable CORS for cross-origin requests
app.use(clerkMiddleware); // Use the Clerk middleware

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, World! This is the backend server.');
});


// Start the server
app.listen(port, () => {
  connectDB(); // Connect to the database when the server starts
  console.log(`Server is running on http://localhost:${port}`);
});