import Result from "../models/Result.js";

export const saveResult = async (req, res) => {
  const { userId, testType, score, total } = req.body;
  const result = await Result.create({ userId, testType, score, total });
  res.json(result);
};

export const getResults = async (req, res) => {
  const data = await Result.find({ userId: req.user.id });
  res.json(data);
};
