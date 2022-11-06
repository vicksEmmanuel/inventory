import { prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import { Roles } from "../enums/Roles";

@ObjectType()
export class User {
  @Field(() => String)
  _id!: string;

  @Field(() => String)
  @prop({ required: true })
  firstName!: string;

  @Field(() => String)
  @prop({ required: true })
  lastName!: string;

  @prop({ required: true })
  password!: string;

  @Field(() => String)
  @prop({ required: true })
  email!: string;

  @Field(() => String)
  @prop({ required: true })
  phoneNumber!: string;

  @Field(() => [Roles!])
  @prop({ required: true })
  roles!: Roles[];
}
