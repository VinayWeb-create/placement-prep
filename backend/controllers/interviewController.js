import Interview from "../models/Interview.js";

export const getInterviews = async (req, res) => {
  const data = await Interview.find();
  res.json(data);
};
