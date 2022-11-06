import { prop } from "@typegoose/typegoose";
import { Field, Float, Int, ObjectType } from "type-graphql";
import { Order } from "./order.schema";
import { Product } from "./product.schema";

@ObjectType()
export class ProductOrder {
  @Field(() => String)
  _id!: string;

  @Field(() => Int!)
  @prop({ required: true })
  quantity!: number;

  @Field(() => Float!)
  @prop({ required: true })
  price!: number;

  @Field(() => Order)
  @prop({ required: true })
  order!: Order;

  @Field(() => Product)
  @prop({ required: true })
  product!: Product;
}
