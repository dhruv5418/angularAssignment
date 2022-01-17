import { Cart } from "./carts";

export interface Order {
  id: number;
  customerName: string;
  cart:Cart[];
}
