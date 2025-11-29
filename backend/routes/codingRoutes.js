import express from "express";
import { getCodingQuestions } from "../controllers/codingController.js";

const router = express.Router();

router.get("/all", getCodingQuestions);

export default router;
