import { registerEnumType } from "type-graphql";

export enum PaymentMethod {
  CREDITCARD,
  BANKTRANSFER,
}

registerEnumType(PaymentMethod, {
  name: "PaymentMethod",
  description: "How user recieved payment",
  valuesConfig: {
    CREDITCARD: {
      description:
        "This involves user paying with their credit card (VISA, MASTERCARD) etc.",
    },
    BANKTRANSFER: {
      description: "This involves user paying through bank transfer",
    },
  },
});
