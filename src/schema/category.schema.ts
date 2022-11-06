import { prop } from "@typegoose/typegoose";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Category {
  @Field(() => String)
  _id!: string;

  @Field(() => String)
  @prop({ required: true })
  name!: string;

  @Field(() => Int)
  @prop({ required: true })
  numberOfProducts!: number;
}
