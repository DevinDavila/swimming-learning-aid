import express from "express";
import UsersController from "./users.controller.js";
import verifyToken from "../authentication/authentication.js";

const router = express.Router();

router.route("/getAllLearners").get(verifyToken, UsersController.apiGetAllUsers);
router.route("/getLearnerById/:id").get(verifyToken, UsersController.apiGetUserById);
router.route("/getAllPendingAdmins").get(verifyToken, UsersController.apiGetAllPendingAdmins);
router.route("/updateAdminStatus").put(verifyToken, UsersController.apiUpdateAdminStatus);

export default router