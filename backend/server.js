const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

// CORS FIX FOR VERCEL + RENDER
app.use(cors({
  origin: [
    "https://placement-prep-jade.vercel.app",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

// Root test route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

// Routes
app.use("/api/auth", authRoutes);

// MONGO CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🔥 MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// PORT for Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
