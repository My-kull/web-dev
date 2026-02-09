const mongoose = require("mongoose");

const connectDB = async () => {
  const MONGO_URL = "mongodb://localhost:27017/web-dev";

  if (mongoose.connection.readyState >= 1) return;

  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

// Impovements:
// Changed hard coded connection string
// Duplicate Connection Prevention
