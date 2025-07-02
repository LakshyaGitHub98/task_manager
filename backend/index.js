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
  res.send("This is only for you , My One and Only, My Love, My Life, My Sweetheart, My Darling, My Angel, My Princess, My Queen, My Heart's Desire, My Soulmate, My Forever Love, My One True Love, My Beloved, My Treasure, My Joy, My Happiness, My Sunshine, My Light in the Dark, My Comforter, My Supporter, My Partner in Crime, My Best Friend, My Confidant, My Rock.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});