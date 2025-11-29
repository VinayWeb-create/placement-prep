import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema({
  company: String,
  role: String,
  package: String,
  topics: [String],
  questions: [String],
});

export default mongoose.model("Interview", interviewSchema);
