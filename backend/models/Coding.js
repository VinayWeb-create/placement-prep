import mongoose from "mongoose";

const codingSchema = new mongoose.Schema({
  title: String,
  description: String,
  sampleInput: String,
  sampleOutput: String,
  difficulty: String,
});

export default mongoose.model("Coding", codingSchema);
