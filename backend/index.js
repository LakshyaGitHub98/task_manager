import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = 3000;


// Middlewares
app.use(cors());
app.use(express.json());


// Routes
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Node.js! Am I Changing ' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});