import express from "express";
import UsersController from "./users.controller.js";

const router = express.Router();

router.route("/getAllLearners").get(UsersController.apiGetAllUsers);
router.route("/getLearnerById/:id").get(UsersController.apiGetUserById);

export default router