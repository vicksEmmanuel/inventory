import { isEmpty } from "class-validator";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Roles } from "../enums/Roles";
import {
  CreateUserInput,
  LoginInput,
  LoginResponse,
  User,
} from "../schema/user.schema";
import UserService from "../service/user.service";
import { Context } from "../types/context";

@Resolver()
export default class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Mutation(() => User)
  createUser(@Arg("input") input: CreateUserInput) {
    if (isEmpty(input.roles)) {
      input.roles = [Roles.STAFF];
    }

    return this.userService.createUser(input);
  }

  @Mutation(() => LoginResponse)
  login(@Arg("input") input: LoginInput, @Ctx() context: Context) {
    return this.userService.login(input, context);
  }

  @Query(() => User)
  me(@Ctx() context: Context) {
    return context.user;
  }
}
