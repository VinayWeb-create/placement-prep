const express = require("express");
const router = express.Router();

const Problem = require("../models/Problem");
const Contest = require("../models/Contest");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

/* ======================================
   CREATE PROBLEM (ADMIN ONLY)
====================================== */
router.post("/", auth, admin, async (req, res) => {
  try {
    const {
      contestId,
      title,
      description,
      functionName,
      difficulty,
      testCases
    } = req.body;

    // ✅ Validation
    if (!contestId || !title || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // ✅ Check contest exists
    const contest = await Contest.findById(contestId);
    if (!contest) {
      return res.status(404).json({ message: "Contest not found" });
    }

    // ✅ Create problem
    const problem = await Problem.create({
      contestId,
      title,
      description,
      functionName,
      difficulty,
      testCases,
    });

    // ✅ Attach problem to contest
    contest.problems.push(problem._id);
    await contest.save();

    res.status(201).json({
      message: "Problem added successfully",
      problem,
    });

  } catch (error) {
    console.error("Add problem error:", error);
    res.status(500).json({ message: "Failed to create problem" });
  }
});

/* ======================================
   GET PROBLEMS FOR A CONTEST
====================================== */
router.get("/contest/:contestId", auth, async (req, res) => {
  try {
    const problems = await Problem.find({
      contestId: req.params.contestId,
    });

    res.json(problems);
  } catch (err) {
    res.status(500).json({ message: "Failed to load problems" });
  }
});

module.exports = router;
