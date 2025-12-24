const express = require("express");
const router = express.Router();
const Problem = require("../models/Problem");
const auth = require("../middleware/auth");

// ✅ GET problems for a contest (protected)
router.get("/:id/problems", auth, async (req, res) => {
  try {
    const problems = await Problem.find({ contestId: req.params.id });
    res.json(problems);
  } catch (err) {
    res.status(500).json({ message: "Failed to load problems" });
  }
});

module.exports = router;
