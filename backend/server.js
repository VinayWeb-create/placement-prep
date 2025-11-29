const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

// 🔥 FIXED CORS FOR RENDER + VERCEL
app.use(cors({
  origin: ["https://placement-prep-jade.vercel.app", "http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));

// Routes
app.use("/api/auth", authRoutes);

// 🔥 FIXED MONGO CONNECTION (NO OLD OPTIONS)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🔥 MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// PORT for Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
