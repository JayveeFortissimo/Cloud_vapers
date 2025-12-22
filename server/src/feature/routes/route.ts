import express from "express";
import { UserController } from "../controller/user.controller";
import { UserAuthenticationService } from "../services/user.service";
import { verifyAccessToken } from "../../middleware/user.middleware";
import { UserRepository } from "../repositories/user.repository";

const routes = express.Router();

const userRepository = new UserRepository();
const userService = new UserAuthenticationService(userRepository);
const userController = new UserController(userService);

routes.post("/register", userController.register);
routes.post("/login", userController.login);
routes.post("/logout",verifyAccessToken, userController.logout);
routes.get("/profile", verifyAccessToken, userController.profile);
//Don`t include middleware this hahaha
routes.post("/refresh_token", userController.refreshtoken);

export default routes;
