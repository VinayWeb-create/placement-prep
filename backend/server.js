const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const contestRoutes = require("./routes/contestRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

/* ---------- CORS (Vercel + Local) ---------- */
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://placement-prep-jade.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

/* ---------- ROUTES ---------- */
app.use("/api/auth", authRoutes);
app.use("/api/contests", contestRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

/* ---------- MONGO (NO OPTIONS, PERIOD) ---------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("🔥 MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

/* ---------- SERVER ---------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
