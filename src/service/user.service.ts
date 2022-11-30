import { ApolloError } from "apollo-server-core";
import bcrypt from "bcrypt";
import { LoginInput, UserModel } from "../schema/user.schema";
import { Context } from "../types/context";
import { signJwt } from "../utils/jwt";

class UserService {
  async createUser(input: any) {
    return UserModel.create(input);
  }

  async login(input: LoginInput, context: Context) {
    const user = await UserModel.find().findByEmail(input.email).lean();
    const e = "Invalid email or password";
    if (!user) {
      throw new ApolloError(e);
    }

    const passwordIsValid = await bcrypt.compare(input.password, user.password);

    if (!passwordIsValid) {
      throw new ApolloError(e);
    }

    const token = signJwt(user);
    context.res.cookie("accessToken", token, {
      maxAge: 3.154e10,
      httpOnly: true,
      domain: "localhost",
      path: "/",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return {
      accessToken: token,
    };
  }
}

export default UserService;
