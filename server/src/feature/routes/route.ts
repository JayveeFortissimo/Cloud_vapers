import express from "express";
import { register, login, logout} from "../controller/user.controller";
import { verifyAuthenticationToken } from "../../middleware/middleware";

const routes = express.Router();

routes.post("/register", register);
routes.post("/login", login);
routes.post("/logout",verifyAuthenticationToken,logout);


export default routes;
