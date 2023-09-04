import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  registrationNumber: {
    type: Number,
    required: [true, "Please provide a number"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  departmentName:{
    type: String,
    required: [true, "Please provide a department name"],
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
