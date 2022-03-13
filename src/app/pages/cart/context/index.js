import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  var cartobj = useCartContextProvider();
  return (
    <CartContext.Provider value={cartobj}>
      {props.children}
    </CartContext.Provider>
  );
};

const useCartContextProvider = () => {
  const [cart, setCart] = useState({});
  
  return { cart, setCart };
};
