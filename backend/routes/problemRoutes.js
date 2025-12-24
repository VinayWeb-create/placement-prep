const express = require("express");
const router = express.Router();
const Problem = require("../models/Problem");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

/**
 * ✅ CREATE PROBLEM (ADMIN)
 */
router.post("/", auth, admin, async (req, res) => {
  try {
    const problem = new Problem(req.body);
    await problem.save();
    res.status(201).json(problem);
  } catch (err) {
    res.status(500).json({ message: "Failed to create problem" });
  }
});

/**
 * 📥 GET PROBLEMS FOR CONTEST
 */
router.get("/contest/:contestId", auth, async (req, res) => {
  const problems = await Problem.find({
    contestId: req.params.contestId,
  });
  res.json(problems);
});

module.exports = router;
