import { Response, Request, NextFunction } from "express";

import { UserAuthenticationService } from "../services/user.service";
import { RegisterInputTypes, LoginInputTypes } from "../types/user.types";

export class UserController {
  private readonly userService: UserAuthenticationService;

  constructor(userService: UserAuthenticationService) {
    this.userService = userService;
  }

  register = async (
    req: Request<{}, {}, RegisterInputTypes>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const registerInputObj: RegisterInputTypes = req.body;
      const result = await this.userService.register(registerInputObj);

      res.status(201).json(result);
    } catch (error) {
      console.log("resulta", this.userService);
      next(error);
    }
  };

  login = async (
    req: Request<{}, {}, LoginInputTypes>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const loginInputObj: LoginInputTypes = req.body;
      const result = await this.userService.login(loginInputObj);

      if (!result.success) {
        res.status(400).json(result);
        return;
      }

      const refreshToken = result.data as { refresh_token: string };

      res.cookie("refreshToken", refreshToken.refresh_token, {
        httpOnly: true,
        // path: "/refresh_token",
        // sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json({ message: "Logout successful" });
    return;
  }
}
