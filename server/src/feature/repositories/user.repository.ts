import { databaseConnection } from "../../config/database";

export class UserRepository {
  private readonly db = databaseConnection;

  async findUser(email: string) {
    return await this.db.query(
      "SELECT * FROM usercredentials WHERE email = $1",
      [email.trim()]
    );
  }

  async registerUser(username: string, hashedPassword: string, email: string) {
    return await this.db.query(
      "INSERT INTO usercredentials (username, password, email) VALUES ($1, $2, $3)",
      [username, hashedPassword, email.trim()]
    );
  }

  async getUser(user_id: number) {
    return await this.db.query(
      "SELECT username, email, isAdmin FROM usercredentials WHERE user_id = $1",
      [user_id]
    );
  }
}
