const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  class: String,
  email: { type: String, required: true, unique: true },
  subjects: [String],
  attendance: {
    type: Number,
    default: 0,
  },
  role: {
    type: String,
    enum: ["employee", "admin"],
  },
});
module.exports = mongoose.model("Employee", employeeSchema);
