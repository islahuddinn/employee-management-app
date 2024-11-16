const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { AuthenticationError } = require("apollo-server-express");

exports.register = async (_, { email, password, role }) => {
  const user = new User({ email, password, role });
  await user.save();
  return user;
};

exports.login = async (_, { email, password }) => {
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    throw new AuthenticationError("Invalid credentials");
  }
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  return { token, user };
};

exports.isAuthenticated = (context) => {
  if (!context.user) {
    throw new AuthenticationError("Not authenticated");
  }
};

exports.isAdmin = (context) => {
  if (!context.user || context.user.role !== "admin") {
    throw new AuthenticationError("Not authorized");
  }
};
