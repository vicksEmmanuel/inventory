import { prop } from "@typegoose/typegoose";
import { Field, Int, ObjectType } from "type-graphql";
import { Product } from "./product.schema";

@ObjectType()
export class Stock {
  @Field(() => String)
  _id!: string;

  @Field(() => Int)
  @prop({ required: true })
  quanity!: number;

  @Field(() => Int)
  @prop({ required: true })
  soldQuantity!: number;

  @Field(() => Product)
  @prop({ required: true })
  product!: Product;
}
