import { databaseConnection } from "../../config/database";

export class UserRepository {
  private readonly db = databaseConnection;

  async findUserbyEmail(email: string) {
    return await this.db.query(
      "SELECT * FROM usercredentials WHERE email = $1",
      [email.trim()]
    );
  }

  async insertUser(username: string, hashedPassword: string, email: string) {
    return await this.db.query(
      "INSERT INTO usercredentials (username, password, email) VALUES ($1, $2, $3)",
      [username, hashedPassword, email.trim()]
    );
  }
}
