"use client";

import { IProduct } from "@/interface";
import React, { createContext, useContext } from "react";
import { useEffect } from "react";
import { toast } from "sonner";
interface ICartContext {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  clearCart: () => void;
  increaseQuantity: (product: IProduct) => void;
  decreaseQuantity: (product: IProduct) => void;
  total: number;
}
const defaultValue = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  total: 0,
} as ICartContext;
interface Props {
  children: React.ReactNode;
}
const CartContext = createContext(defaultValue);
export default CartContext;
export function CartContextProvider({ children }: Props) {
  const [cart, setCart] = React.useState(defaultValue.cart);
  useEffect(() => {
    const carts = localStorage.getItem("cart");
    if (carts) {
      setCart(JSON.parse(carts));
    }
  }, []);
  const addToCart = (product: IProduct) => {
    const carts = localStorage.getItem("cart");
    if (carts) {
      const cart = JSON.parse(carts);
      if (cart.some((item: IProduct) => item.id === product.id)) {
        const index = cart.findIndex(
          (item: IProduct) => item.id === product.id
        );
        cart[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        setCart(cart);
      } else {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        setCart(cart);
      }
    } else {
      setCart([product]);
      localStorage.setItem("cart", JSON.stringify([product]));
    }
    toast.success("Product added to cart");
  };

  const removeFromCart = (product: IProduct) => {
    const carts = localStorage.getItem("cart");
    if (carts) {
      const cart = JSON.parse(carts);
      const index = cart.findIndex((item: IProduct) => item.id === product.id);
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      setCart(cart);
    }
  };
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };
  const increaseQuantity = (product: IProduct) => {
    const carts = localStorage.getItem("cart");
    if (carts) {
      const cart = JSON.parse(carts);
      const index = cart.findIndex((item: IProduct) => item.id === product.id);
      cart[index].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      setCart(cart);
    }
  };
  const decreaseQuantity = (product: IProduct) => {
    const carts = localStorage.getItem("cart");
    if (carts) {
      const cart = JSON.parse(carts);
      const index = cart.findIndex((item: IProduct) => item.id === product.id);
      cart[index].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      setCart(cart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        total: cart.reduce(
          (acc, item) => acc + parseInt(item.price) * item.quantity,
          0
        ),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
