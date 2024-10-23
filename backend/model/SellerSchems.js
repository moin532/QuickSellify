const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Mobile", "Electronics", "Furniture", "Accessories", "Other"], // Example categories
  },
  price: {
    type: Number,
    required: true,
  },
  condition: {
    type: String,
    required: true,
    enum: ["New", "Like New", "Used", "Refurbished"],
  },
  images: [
    {
      public_id: String, // Image upload reference (e.g., Cloudinary)
      url: String, // Image URL
    },
  ],
  brandModel: {
    type: String, // Optional, e.g., Apple, Samsung, IKEA, etc.
  },
  specifications: {
    type: String, // Optional field for product specifications
  },
  accessoriesIncluded: {
    type: Boolean, // If accessories like charger, headphones are included
    default: false,
  },
  location: {
    type: String,
    required: true, // Pickup location or seller’s address
  },
  sellerId: {
    type: mongoose.Schema.ObjectId, // Reference to seller (User schema)
    ref: "User",
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected", "sold"],
    default: "pending",
  },
  buyerId: {
    type: String,
    default: null,
  },
  qualityCheck: {
    type: Boolean,
    default: false, // Quality check before product is listed
  },
  negotiable: {
    type: Boolean,
    default: false, // If price is negotiable
  },
  returnPolicy: {
    type: String, // Return policy details if applicable
    default: "No returns",
  },
  quality_check: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
