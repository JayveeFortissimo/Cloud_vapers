import bcrypt from "bcrypt";
import { accessToken, refreshToken } from "../../utils/tokens";
import { RegisterInputTypes, LoginInputTypes } from "../types/user.types";
import { UserRepository } from "../repositories/user.repository";
import { unifiedResponse } from 'uni-response';
export class UserAuthenticationService {

  constructor(private readonly userRepository: UserRepository) {}

  async register(registerInputObj: RegisterInputTypes) {
    const { username, email, password } = registerInputObj;

    const hashedPassword = await bcrypt.hash(password, 10);

    const isExistingUser = await this.userRepository.findUserbyEmail(email);

    if (isExistingUser.rows.length > 0) {
      return unifiedResponse(false, "User already exists", null);
    }

    await this.userRepository.insertUser(username, hashedPassword, email);

    return unifiedResponse(true, "User registered successfully", null);
  }

  async login(loginInputObj: LoginInputTypes) {
    const { email, password } = loginInputObj;

    const user = await this.userRepository.findUserbyEmail(email);

    const yourPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!yourPassword) {
      return unifiedResponse(false, "Invalid password", null);
    }

    const { user_id, username, age } = user.rows[0];

    const access_token = accessToken({ user_id, username, age });
    const refresh_token = refreshToken({ user_id, username, age });

    return unifiedResponse(true, "Login successful", {access_token, refresh_token});
  }
}
