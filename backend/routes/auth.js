const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
// Register
router.post("/signin", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password);
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = new User({
      email,
      username,
      password: hashpassword,
    });

    await user.save();
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: "An error occurred during registration" });
  }
});

// log in
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const { password, ...others } = user._doc;
    res.status(200).json({ others });
  } catch (error) {
    res.status(500).json({ message: "An error occurred during login" });
  }
});
module.exports = router;
