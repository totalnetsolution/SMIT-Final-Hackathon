import express from "express";
import { getAllApplications, updateApplicationStatus } from "../controllers/adminController.js";

const router = express.Router();

// Admin APIs
router.get("/applications", getAllApplications);
router.put("/applications/:id", updateApplicationStatus);

export default router;
