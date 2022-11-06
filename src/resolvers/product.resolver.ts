import { Query, Resolver } from "type-graphql";
import { Product } from "../schema/product.schema";

@Resolver()
export default class ProductResolver {
  @Query(() => Product)
  product() {
    return undefined;
  }
}
