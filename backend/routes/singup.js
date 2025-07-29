const express = require('express');
const router = express.Router();
const { singup } = require('../controllers/signupController');

router.post('/', singup);

module.exports = router;