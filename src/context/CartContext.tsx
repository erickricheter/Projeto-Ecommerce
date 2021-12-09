/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from "react";
import { ProductData } from "../pages/Home/FavoriteProducts/types";
import { CartContextProps } from "./types";

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<ProductData[]>([]);

  const addItem = (item: ProductData) => {
    const index = cart.findIndex((product) => product.id === item.id);
    if (index > -1) {
      const newCart = [...cart];
      newCart[index] = {
        ...newCart[index],
        count: newCart[index].count ? (newCart[index].count ?? 0) + 1 : 1,
      };
      setCart([...newCart]);
    } else {
      setCart([...cart, { ...item, count: 1 }]);
    }
  };

  const plusOne = (id: number) => {
    const index = cart.findIndex((product) => product.id === id);
    // eslint-disable-next-line no-debugger
    debugger;
    if (index > -1) {
      const newCart = [...cart];
      newCart[index] = {
        ...newCart[index],
        count: newCart[index].count ? (newCart[index].count ?? 0) + 1 : 1,
      };
      setCart(newCart);
    }
  };

  const minusOne = (id: number) => {
    const index = cart.findIndex((product) => product.id === id);
    if (index > -1) {
      const newCart = [...cart];
      newCart[index] = {
        ...newCart[index],
        count: newCart[index].count ? (newCart[index].count ?? 0) - 1 : 0,
      };
      setCart([...newCart]);
    }
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((product) => product.id !== id));
  };
  return (
    <CartContext.Provider
      value={{ cart, addItem, plusOne, minusOne, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
