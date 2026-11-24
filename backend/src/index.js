import express from 'express';
import "dotenv/config"; // Load environment variables from .env file
const app = express();
const port = process.env.PORT;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, World! This is the backend server.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});