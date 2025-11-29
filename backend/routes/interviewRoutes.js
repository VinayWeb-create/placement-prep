import express from "express";
import { getInterviews } from "../controllers/interviewController.js";

const router = express.Router();

router.get("/all", getInterviews);

export default router;
