import { DB } from "@lunoxjs/eloquent";
import { Seeder } from "@lunoxjs/eloquent";
import bcrypt from "bcrypt";
class UserSeeder extends Seeder {
  public async run() {
    await DB.table("users").truncate();
    await DB.table("users").insert({
      user_name: "user",
      email: "user@example.mail",
      first_name: "John",
      last_name: "Doe",
      password: bcrypt.hashSync("password", 10),
    });
  }
}
export default UserSeeder;
