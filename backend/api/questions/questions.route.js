import express from "express";
import QuestionsController from "./questions.controller.js";

const router = express.Router();

router.route("/questionsByStage/:stage").get(QuestionsController.apiGetQuestionsByStage);

export default router