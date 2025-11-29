import express from "express";
import { getQuestions } from "../controllers/aptitudeController.js";

const router = express.Router();

router.get("/all", getQuestions);

export default router;
