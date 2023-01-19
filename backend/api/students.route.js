import express from "express";
import StudentsController from "./students.controller.js";

const router = express.Router();

router.route("/").get(StudentsController.apiGetStudents);

export default router