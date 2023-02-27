import express from "express";
import ScoresController from "./scores.controller.js";
import verifyToken from "../authentication/authentication.js";

const router = express.Router();

router.route("/scoresByLearnerIdByStage/:userId/:stage").get(verifyToken, ScoresController.apiGetScoreByUserIdByStage);
router.route("/latestScoreByLearnerId/:userId").get(verifyToken, ScoresController.apiGetLatestScoreByUserId);
router.route("/add").post(verifyToken, ScoresController.apiAddScore); 

export default router