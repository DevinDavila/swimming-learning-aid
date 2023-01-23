import express from "express";
import AnswersController from "./answers.controller.js";

const router = express.Router();

router.route("/answersByQuestionId/:questionId").get(AnswersController.apiGetAnswersByQuestionId);

export default router