import express from "express";
import UsersController from "./users.controller.js";

const router = express.Router();

router.route("/getAllLearners").get(UsersController.apiGetAllUsers);
router.route("/getLearnerById/:id").get(UsersController.apiGetUserById);
router.route("/getAllPendingAdmins").get(UsersController.apiGetAllPendingAdmins);

export default router