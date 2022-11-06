import { Query, Resolver } from "type-graphql";
import { ProductOrder } from "../schema/productOrder.schema";

@Resolver()
export default class ProductOrderResolver {
  @Query(() => ProductOrder)
  productOrder() {
    return undefined;
  }
}
