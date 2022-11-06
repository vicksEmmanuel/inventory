import { Query, Resolver } from "type-graphql";
import { Payment } from "../schema/payment.schema";

@Resolver()
export default class PaymentResolver {
  @Query(() => Payment)
  payment() {
    return undefined;
  }
}
