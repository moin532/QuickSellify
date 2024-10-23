const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true, // Hashed password
  },
  role: {
    type: String,
    enum: ["buyer", "seller", "admin"],
    default: "buyer",
  },
  profile: {
    location: {
      type: String,
    },
    phone: {
      type: String,
      required: true, // Mobile number for authentication and OTP
    },
    sellerRating: {
      type: Number, // Seller’s rating based on feedback
      default: 0,
    },
    purchaseHistory: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Purchase",
      },
    ], // List of purchases (for buyers)
    sellHistory: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
    ], // List of products sold (for sellers)
  },
});

module.exports = mongoose.model("User", UserSchema);
