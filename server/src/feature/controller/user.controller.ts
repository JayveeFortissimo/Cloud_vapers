import { Response, Request, NextFunction } from "express";
import { UserAuthenticationService } from "../services/user.service";
import { RegisterInputTypes, LoginInputTypes } from "../types/user.types";

export class UserController {
  private readonly userService: UserAuthenticationService;

  constructor(userService: UserAuthenticationService) {
    this.userService = userService;
  }

  register = async (
    req: Request<RegisterInputTypes>,
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
    req: Request<LoginInputTypes>,
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

      const refreshTokenStr = (result.data as { refresh_token: string })
        .refresh_token;
      const accessTokenStr = (result.data as { access_token: string })
        .access_token;

      res.cookie("jwtToken", refreshTokenStr, {
        httpOnly: true,
        // path: "/refresh_token",
        // sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(200).json({ access_token: accessTokenStr });
    } catch (error) {
      next(error);
    }
  };

  logout = async (req: Request, res: Response) => {
    const isUserLogin = req.user;

    if (!isUserLogin) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    res.clearCookie("jwtToken");

    res.json({ message: "Logout successful" });
    return;
  };

  refreshtoken = async (req: Request, res: Response) => {
    try {
      const refreshTokens = req.cookies.jwtToken;

      if (!refreshTokens) {
        res.status(401).json({ message: "No refresh token provided" });
        return;
      }

      const result = await this.userService.refreshToken(refreshTokens);

      const newAccessToken = result?.data as { access_token: string };

      res.json({ access_token: newAccessToken.access_token as string });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      console.log(error);
    }
  };

  profile = async (req: Request, res: Response) => {
    try {
      const userEmail = req.user;
      const user = await this.userService.getProfile(userEmail?.user_id);
   
      res.status(201).json({ user: {username:user.username, email:user.email, isAdmin:user.isadmin} });
    } catch (_error) {
      console.log(_error);
    }
  };
}
