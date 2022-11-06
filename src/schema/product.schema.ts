import { prop } from "@typegoose/typegoose";
import { Field, Float, Int, ObjectType } from "type-graphql";
import { Category } from "./category.schema";

@ObjectType()
export class Product {
  @Field(() => String)
  _id!: string;

  @Field(() => String)
  @prop({ required: true })
  name!: string;

  @Field(() => Float)
  @prop({ required: true })
  price!: number;

  @Field(() => Int)
  @prop({ required: true })
  quantity!: number;

  @Field(() => Category)
  @prop({ required: true })
  category!: Category;
}
