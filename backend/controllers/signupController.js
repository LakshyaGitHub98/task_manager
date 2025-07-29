const User = require('../models/User');

const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // 🔍 Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists 😕' });
    }

    // 💾 Save user directly (no hashing for now)
    const newUser = new user({
      name,
      email,
      password, // 🔓 Plaintext — dev only!
    });

    await newUser.save();
    res.status(201).json({ message: 'Signup successful ✨' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error 💥' });
  }
};

module.exports = { signUp };