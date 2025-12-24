const express = require("express");
const router = express.Router();
const ContestRegistration = require("../models/ContestRegistration");
const auth = require("../middleware/auth");

router.post("/register", auth, async (req, res) => {
  try {
    const registration = await ContestRegistration.create({
      ...req.body,
      userId: req.user.id,
    });

    res.json({ message: "Registered successfully", registration });
  } catch (err) {
    res.status(500).json({ message: "Registration failed" });
  }
});

module.exports = router;
