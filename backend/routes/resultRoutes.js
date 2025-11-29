import express from "express";
import { saveResult, getResults } from "../controllers/resultController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/save", saveResult);
router.get("/user", auth, getResults);

export default router;
