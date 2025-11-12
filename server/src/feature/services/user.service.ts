import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  accessToken,
  refreshToken,
  REFRESH_TOKEN_SECRET,
} from "../../utils/tokens";
import { RegisterInputTypes, LoginInputTypes } from "../types/user.types";
import { UserRepository } from "../repositories/user.repository";
import { unifiedResponse } from "uni-response";
export class UserAuthenticationService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(registerInputObj: RegisterInputTypes) {
    const { username, email, password } = registerInputObj;

    const hashedPassword = await bcrypt.hash(password, 10);

    const isExistingUser = await this.userRepository.findUser(email);

    if (isExistingUser.rows.length > 0) {
      return unifiedResponse(false, "User already exists", null);
    }

    await this.userRepository.registerUser(username, hashedPassword, email);

    return unifiedResponse(true, "User registered successfully", null);
  }

  async login(loginInputObj: LoginInputTypes) {
    const { email, password } = loginInputObj;

    const user = await this.userRepository.findUser(email);

    const userPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!userPassword) {
      return unifiedResponse(false, "Invalid password", null);
    }

    const { user_id, username, age } = user.rows[0];

    const access_token = accessToken({ user_id, username, age });
    const refresh_token = refreshToken({ user_id, username, age });

    return unifiedResponse(true, "Login successful", {
      access_token,
      refresh_token,
    });
  }

  async refreshToken(refreshToken: string) {
    const user = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET) as {
      user_id: string;
    };

    console.log("from user Refresh Token", user);

    if (!user) return unifiedResponse(false, "Invalid refresh token", null);
    //new token 2
    const newAccessToken = accessToken({ user_id: user.user_id as string });

    console.log("newAccessToken", newAccessToken);
    console.log("user", user);

    return unifiedResponse(true, "New access token generated", {
      // access_token: newAccessToken,
    });
  }
}
