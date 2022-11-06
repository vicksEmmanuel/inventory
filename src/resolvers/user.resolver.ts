import { Query, Resolver } from "type-graphql";
import { Roles } from "../enums/Roles";
import { User } from "../schema/user.schema";

@Resolver()
export default class UserResolver {
  @Query(() => User)
  user() {
    return {
      _id: "123",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "020202020",
      email: "John Doe",
      roles: [Roles.MANAGER],
    };
  }
}
