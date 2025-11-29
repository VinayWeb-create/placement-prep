import mongoose from "mongoose";

const aptitudeSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: Number,
  difficulty: String,
});

export default mongoose.model("Aptitude", aptitudeSchema);
