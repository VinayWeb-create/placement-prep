const express = require("express");
const router = express.Router();
const Participant = require("../models/Registration");
const auth = require("../middleware/auth");

// REGISTER FOR CONTEST
router.post("/register", auth, async (req, res) => {
  const { contestId, name, email, college, year } = req.body;

  if (!contestId || !name || !email) {
    return res.status(400).json({ message: "Missing fields" });
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

  res.json(participant);
});

// ADMIN: get participants
router.get("/:contestId", async (req, res) => {
  const list = await Participant.find({
    contestId: req.params.contestId,
  });
  res.json(list);
});

module.exports = router;
