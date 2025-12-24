const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

// -------- CORS FIX FOR VERCEL + RENDER ----------
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://placement-prep-jade.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// -------- API ROUTES ----------
app.use("/api/auth", authRoutes);

// -------- SIMPLE TEST ROUTE ----------
app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

// -------- MONGO CONNECTION ----------
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// -------- START SERVER ----------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
