import { Query, Resolver } from "type-graphql";
import { Stock } from "../schema/stock.schema";

@Resolver()
export default class StockResolver {
  @Query(() => Stock)
  stock() {
    return undefined;
  }
}
