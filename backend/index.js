const express = require('express');
const app = require('./routes/app');
const port = process.env.PORT  || 3000;
//const connectDB = require('./src/db');
const loginRoutes = require('./routes/login');

//connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});




app.post('/api/login',loginRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
