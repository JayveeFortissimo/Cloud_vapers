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
      const accessToken = result.data as { access_token: string };

      res.cookie("refreshToken", refreshToken.refresh_token, {
        httpOnly: true,
        // path: "/refresh_token",
        // sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(200).json({ access_token: accessToken.access_token });
    } catch (error) {
      next(error);
    }
  };

  logout = async (req: Request, res: Response) => {
    const isUserLogin = (req as any).user;

    if (!isUserLogin) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    res.clearCookie("refreshToken");

    res.json({ message: "Logout successful" });
    return;
  };

  refreshtoken = async (req: Request, res: Response) => {
 try{
     const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      res.status(401).json({ message: "No refresh token provided" });
      return;
    }

    const resultNewTokens = await this.userService.refreshToken(refreshToken);

    res.cookie("refreshToken", resultNewTokens, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ access_token: resultNewTokens });
  }catch(error){
    res.status(500).json({ message: "Internal server error" });
  }
 }
 
}
