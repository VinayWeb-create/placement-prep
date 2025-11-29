import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  userId: String,
  testType: String,
  score: Number,
  total: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Result", resultSchema);
