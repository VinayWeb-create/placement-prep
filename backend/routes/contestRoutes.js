const express = require("express");
const router = express.Router();

const Contest = require("../models/Contest");
const Problem = require("../models/Problem");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

/* ======================================
   CREATE CONTEST (ADMIN ONLY)
====================================== */
router.post("/", auth, admin, async (req, res) => {
  try {
    const { title, duration, startTime } = req.body;

    if (!title || !duration || !startTime) {
      return res.status(400).json({ message: "All fields required" });
    }

    const contest = await Contest.create({
      title,
      duration,
      startTime,
      createdBy: req.user.id,
    });

    res.status(201).json(contest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create contest" });
  }
});

/* ======================================
   GET ALL CONTESTS (PUBLIC)
====================================== */
router.get("/", async (req, res) => {
  try {
    const contests = await Contest.find().sort({ createdAt: -1 });
    res.json(contests);
  } catch {
    res.status(500).json({ message: "Failed to load contests" });
  }
});

/* ======================================
   GET PROBLEMS FOR A CONTEST (AUTH)
====================================== */
router.get("/:id/problems", auth, async (req, res) => {
  try {
    const problems = await Problem.find({
      contestId: req.params.id,
    });

    res.json(problems);
  } catch {
    res.status(500).json({ message: "Failed to load problems" });
  }
});

module.exports = router;
