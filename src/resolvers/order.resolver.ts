import { Query, Resolver } from "type-graphql";
import { Order } from "../schema/order.schema";

@Resolver()
export default class OrderResolver {
  @Query(() => Order)
  order() {
    return undefined;
  }
}
