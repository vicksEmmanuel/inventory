import { Query, Resolver } from "type-graphql";
import { Category } from "../schema/category.schema";

@Resolver()
export default class CategoryResolver {
  @Query(() => Category)
  category() {
    return {
      _id: "123",
      name: "hello",
      numberOfProducts: 29,
    };
  }
}
