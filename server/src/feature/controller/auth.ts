import { Response, Request, RequestHandler } from "express";
import bcrypt from "bcrypt";
import { pool } from "../../config/database";
import { accessToken, refreshToken } from "../../utils/tokens";
import { RegisterInputTypes, LoginInputTypes } from "../types/user.types";

const register: RequestHandler = async (
  req: Request<{}, {}, RegisterInputTypes>,
  res: Response
): Promise<void> => {
  const registerInputOnj: RegisterInputTypes = req.body;

  try {
    const hashedPassword = await bcrypt.hash(registerInputOnj.password, 10);

    const isExistingUser = await pool.query(
      "SELECT * FROM usercredentials WHERE email = $1",
      [registerInputOnj.email.trim()]
    );

    if (isExistingUser.rows.length > 0) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    await pool.query(
      "INSERT INTO usercredentials (username, password, email) VALUES ($1, $2, $3)",
      [registerInputOnj.username, hashedPassword, registerInputOnj.email.trim()]
    );

    res.status(200).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login: RequestHandler = async (
  req: Request<{}, {}, LoginInputTypes>,
  res: Response
): Promise<void> => {
  const loginObject: LoginInputTypes = req.body;

  try {
    const user = await pool.query(
      "SELECT * FROM usercredentials WHERE email = $1",
      [loginObject.email.trim()]
    );

    const yourPassword = await bcrypt.compare(
      loginObject.password,
      user.rows[0].password
    );

    if (!yourPassword) {
      res.status(400).json({ message: "Wrong Password" });
      return;
    }

    const { user_id, username, age } = user.rows[0];

    const accesstoken = accessToken({ user_id, username, age });
    const refreshtoken = refreshToken({ user_id, username, age });

    //Refresh token stpre in cookies cuz of its valid in 7days unlike of accesstoken is for almost 1 hour i think
    res.cookie("refreshToken", refreshtoken, {
      httpOnly: true,
      // path: "/refresh_token",
      // sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json(accesstoken);
  } catch (error) {
    res.status(500).json({ message: "No Email found" });
  }
};

const logout: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userIsLogin = (req as any).user;

  if (!userIsLogin) {
    res.status(404).json("User not found");
    return;
  }

  res.clearCookie("refreshToken", {
    httpOnly: true,
    // sameSite: "strict",
    // path: "/refresh_token"
  });

  res.json("Logout successfully!");
};

export { register, login, logout };
