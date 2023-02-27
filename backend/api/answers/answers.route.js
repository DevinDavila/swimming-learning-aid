import express from "express";
import AnswersController from "./answers.controller.js";
import verifyToken from "../authentication/authentication.js";

const router = express.Router();

router.route("/answersByQuestionId/:questionId").get(verifyToken, AnswersController.apiGetAnswersByQuestionId);

export default router