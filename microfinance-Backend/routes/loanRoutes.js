import express from "express";
import { createLoanRequest, getUserLoans } from "../controllers/loanController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Loan APIs
router.post("/", authMiddleware, createLoanRequest);
router.get("/", authMiddleware, getUserLoans);

export default router;
