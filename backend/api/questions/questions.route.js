import express from "express";
import QuestionsController from "./questions.controller.js";
import verifyToken from "../authentication/authentication.js";

const router = express.Router();

router.route("/questionsByStage/:stage").get(verifyToken, QuestionsController.apiGetQuestionsByStage);

export default router