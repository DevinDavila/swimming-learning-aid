import express from "express";
import ScoresController from "./scores.controller.js";

const router = express.Router();

router.route("/scoresByLearnerIdByStage/:userId/:stage").get(ScoresController.apiGetScoreByUserIdByStage);
router.route("/latestScoreByLearnerId/:userId").get(ScoresController.apiGetLatestScoreByUserId);
router.route("/add").post(ScoresController.apiAddScore); 

export default router