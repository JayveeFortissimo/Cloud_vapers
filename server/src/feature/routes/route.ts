import express from "express";
import { UserController } from "../controller/user.controller";
import { UserAuthenticationService } from "../services/user.service";
import { verifyAccessToken } from "../../middleware/user.middleware";
import { UserRepository } from "../repositories/user.repository";

import { ProductsService } from "../services/products.service";
import { ProductsController } from "../controller/products.controller";
import { ProductsRepositories } from "../repositories/products.repository";

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

const productsRepository = new ProductsRepositories();
const productsService = new ProductsService(productsRepository);
const productsController = new ProductsController(productsService);


routes.get("/products", productsController.getAllProducts);

export default routes;
