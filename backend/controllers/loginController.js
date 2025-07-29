const mongoose = require('mongoose');
const User = require('../models/User');     

async function login(req, res) {
    try {
        // Simulate a login process
        const { username, password } = req.body;
        
        //Find a user
        const user = await User.findOne({ username});
        
        // Check if user exists and password matches
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        res.status(200).json({ message: 'Login successful', token: 'abc123' });
                
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

module.exports = {
    login
};