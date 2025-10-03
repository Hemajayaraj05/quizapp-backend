const { registerUser, loginUser } = require("../services/authService");

exports.signup = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);
    res.send({ message: "user created successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  console.log("Received body:", req.body);
  try {
    const existingUser = await loginUser(req.body);
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json(existingUser);
  } catch (err) {
    console.error("Login error:", err);
    res.status(400).json({ error: err.message });
  }
};
