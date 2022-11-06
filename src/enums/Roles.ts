import { registerEnumType } from "type-graphql";

export enum Roles {
  MANAGER,
  STAFF,
  STOCKSELLER,
}

registerEnumType(Roles, {
  name: "Roles",
  description: "Role users can have",
  valuesConfig: {
    MANAGER: { description: "This user is the manager" },
    STAFF: { description: "This user is the staff" },
    STOCKSELLER: { description: "This user sells the products" },
  },
});
