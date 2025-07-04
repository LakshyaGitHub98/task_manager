async function login(req, res) {
    try {
        // Simulate a login process
        const { username, password } = req.body;

        // Here you would typically check the credentials against a database
        if (username === 'admin' && password === 'password') {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

module.exports = {
    login
};