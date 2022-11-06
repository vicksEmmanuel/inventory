import CategoryResolver from "./category.resolver";
import OrderResolver from "./order.resolver";
import PaymentResolver from "./payment.resolver";
import ProductResolver from "./product.resolver";
import ProductOrderResolver from "./productOrder.resolver";
import StockResolver from "./stock.resolver";
import UserResolver from "./user.resolver";

export const resolvers = [
  UserResolver,
  CategoryResolver,
  OrderResolver,
  PaymentResolver,
  ProductResolver,
  ProductOrderResolver,
  StockResolver,
] as const;
