const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  contestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contest",
    required: true,
  },

  title: { type: String, required: true },
  slug: { type: String, unique: true },

  description: String,
  problemStatement: String,

  inputFormat: String,
  outputFormat: String,
  constraints: String,

  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "easy",
  },

  functionName: String,

  sampleTests: [
    {
      input: String,
      output: String,
    }
  ],

  hiddenTests: [
    {
      input: String,
      output: String,
    }
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Problem", problemSchema);
