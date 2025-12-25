const express = require("express");
const router = express.Router();
const Participant = require("../models/Participant");
const auth = require("../middleware/auth");

// ===============================
// REGISTER FOR CONTEST
// ===============================
router.post("/register", auth, async (req, res) => {
  try {
    const { contestId, name, email, college, year } = req.body;

    if (!contestId || !name || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const already = await Participant.findOne({
      contestId,
      email,
    });

    if (already) {
      return res.status(400).json({ message: "Already registered" });
    }

    const participant = await Participant.create({
      contestId,
      userId: req.user.id,
      name,
      email,
      college,
      year,
    });

    res.status(201).json(participant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration failed" });
  }
});

// ===============================
// ADMIN: GET PARTICIPANTS
// ===============================
router.get("/:contestId", async (req, res) => {
  try {
    const participants = await Participant.find({
      contestId: req.params.contestId,
    });

    res.json(participants);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch participants" });
  }
});

module.exports = router;
