import Coding from "../models/Coding.js";

export const getCodingQuestions = async (req, res) => {
  const data = await Coding.find();
  res.json(data);
};
