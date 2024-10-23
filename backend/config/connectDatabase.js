const mongoose = require("mongoose");
const dotenv = require("dotenv");

// MongoDB connection string from environment variables
const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";

// Function to connect to MongoDB
const connectMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

// Export the connection function
module.exports = connectMongo;
