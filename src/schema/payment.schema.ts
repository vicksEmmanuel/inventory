import { prop } from "@typegoose/typegoose";
import { Field, Int, ObjectType } from "type-graphql";
import { PaymentMethod } from "../enums/PaymentMethod";
import { Order } from "./order.schema";

@ObjectType()
export class Payment {
  @Field(() => String)
  _id!: string;

  @Field(() => Int!)
  @prop({ required: true })
  amount!: number;

  @Field(() => Date!)
  @prop({ required: true })
  paymentDate!: Date;

  @Field(() => Order)
  @prop({ required: true })
  order!: Order;

  @Field(() => PaymentMethod)
  @prop({ required: true })
  paymentMethod!: PaymentMethod;
}
