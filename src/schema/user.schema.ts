import {
  getModelForClass,
  index,
  pre,
  prop,
  queryMethod,
} from "@typegoose/typegoose";
import { AsQueryMethod, ReturnModelType } from "@typegoose/typegoose/lib/types";
import bcrypt from "bcrypt";
import { IsEmail, MinLength } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";
import { Roles } from "../enums/Roles";

function findByEmail(
  this: ReturnModelType<typeof User, QueryHelpers>,
  email: User["email"]
) {
  return this.findOne({ email });
}

interface QueryHelpers {
  findByEmail: AsQueryMethod<typeof findByEmail>;
}

@pre<User>("save", async function () {
  // Check that the password is being modified
  if (!this.isModified("password")) {
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hashSync(this.password, salt);
  this.password = hash;
})
@index({ email: 1 })
@queryMethod(findByEmail)
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

export const UserModel = getModelForClass<typeof User, QueryHelpers>(User);

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @prop({ required: true })
  firstName!: string;

  @Field(() => String)
  @prop({ required: true })
  lastName!: string;

  @Field(() => String)
  @MinLength(6, { message: "Password must be at least 6 characters long" })
  @prop({ required: true })
  password!: string;

  @IsEmail()
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

@InputType()
export class LoginInput {
  @Field(() => String)
  @prop({ required: true })
  email!: string;

  @Field(() => String)
  @prop({ required: true })
  password!: string;
}

@ObjectType()
export class LoginResponse {
  @Field(() => String)
  accessToken!: string;
}
