import express from "express";
import UsersController from "./users.controller.js";

const router = express.Router();

router.route("/getAllLearners").get(UsersController.apiGetAllUsers);

export default router