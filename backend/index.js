const express = require('express');
const app = require('./routes/app');
const port = process.env.PORT  || 3000;
const connectDB = require('./src/db');
const loginRoutes = require('./routes/login');
const cors = require('cors');
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World! updatetd');
});

app.post('/api/login',loginRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
