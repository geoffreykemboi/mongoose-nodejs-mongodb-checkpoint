require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');

// Get MongoDB URI from environment
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("Missing MONGO_URI in .env file");
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("Database connection error:", err));

module.exports = mongoose;
