const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Secret for JWT
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Signup Function
exports.signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
console.log(req.body);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return res.status(201).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Error registering user" });
  }
};


// Login Function
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate user input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};


exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming `verifyToken` adds `user` to the request
    const user = await User.findById(userId).select("-password"); // Exclude sensitive data like password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Update User Profile
exports.updateProfile = async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update fields
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;

    await user.save();
    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server error updating profile" });
  }
};

// Delete User Account
exports.deleteAccount = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Error deleting account:", error);
    res.status(500).json({ message: "Server error deleting account" });
  }
};
