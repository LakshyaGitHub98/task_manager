import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config({
    path: './.env'
});
app.get('/', (req, res) => {
  res.send('Hello from backend! ');
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port at ${process.env.PORT}`);
});