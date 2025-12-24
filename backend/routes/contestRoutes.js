const express = require("express");
const router = express.Router();
const Contest = require("../models/Contest");
const Problem = require("../models/Problem");
const auth = require("../middleware/auth");

// 🔐 CREATE CONTEST (ADMIN)
router.post("/", auth, async (req, res) => {
  try {
    const contest = new Contest(req.body);
    await contest.save();
    res.json(contest);
  } catch (err) {
    res.status(500).json({ message: "Failed to create contest" });
  }
});

// 📥 GET ALL CONTESTS
router.get("/", async (req, res) => {
  const contests = await Contest.find().sort({ createdAt: -1 });
  res.json(contests);
});

// 📘 GET PROBLEMS FOR CONTEST
router.get("/:id/problems", auth, async (req, res) => {
  try {
    const problems = await Problem.find({ contestId: req.params.id });
    res.json(problems);
  } catch (err) {
    res.status(500).json({ message: "Failed to load problems" });
  }
});

module.exports = router;
