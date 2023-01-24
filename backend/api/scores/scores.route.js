import express from "express";
import ScoresController from "./scores.controller.js";

const router = express.Router();

router.route("/scoresBystudentIdByStage/:studentId/:stage").get(ScoresController.apiGetScoreByStudentIdByStage);

export default router