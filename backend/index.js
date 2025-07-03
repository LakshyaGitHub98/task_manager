import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;


// Middlewares
app.use(cors());
app.use(express.json());


// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js API!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page of the Node.js API on  public server.');
});


app.get('/message', (req, res) => {
  return res.json({
    message: 'Hello, this is a message from the Node.js API!'
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});