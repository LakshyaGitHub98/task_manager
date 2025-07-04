const express = require('express');
const app = require('./routes/app');
const port = process.env.PORT  || 3000;
//const connectDB = require('./src/db');
const loginRoutes = require('./routes/login');
const cors = require('cors');
//connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Dummy check — replace with real DB logic
  if (username === 'admin' && password === '123456') {
    return res.status(200).json({ message: 'Login successful', token: 'abc123' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});



//app.post('/api/login',loginRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
