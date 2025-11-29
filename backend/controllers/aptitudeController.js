import Aptitude from "../models/Aptitude.js";

export const getQuestions = async (req, res) => {
  const data = await Aptitude.find();
  res.json(data);
};
