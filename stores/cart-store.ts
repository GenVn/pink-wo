import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Product {
  id: number;
  name: string;
  options: {
    id: number;
    value: string;
    price: number;
  }[];
}

export interface CartState {
  cart: Product[] | [];
  cartTotal: number;
  cartItems: number;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product, quantity: number) => void;
  clearCart: () => void;
  incrementQuantity: (product: Product) => void;
  decrementQuantity: (product: Product) => void;
}
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      cartTotal: 0,
      cartItems: 0,
      addToCart: (product: Product, quantity: number) => {
        const itemToAdd = Array(quantity).fill(product);
        set((state) => ({
          cart: [...state.cart, ...itemToAdd],
        }));
      },
      removeFromCart: (product: Product, quantity: number) => {},
      clearCart: () => {},
      incrementQuantity: (product: Product) => {},
      decrementQuantity: (product: Product) => {},
    }),
    {
      name: "cart-storage",
    }
  )
);
