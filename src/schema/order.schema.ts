import { prop } from "@typegoose/typegoose";
import { Field, Float, ObjectType } from "type-graphql";
import { User } from "./user.schema";

@ObjectType()
export class Order {
  @Field(() => String)
  _id!: string;

  @Field(() => Date)
  @prop({ required: true })
  orderDate!: Date;

  @Field(() => Date)
  @prop({ required: true })
  deliveryDate!: Date;

  @Field(() => Float!)
  @prop({ required: true })
  totalPrice!: number;

  @Field(() => User)
  @prop({ required: true })
  seller!: User;
}
