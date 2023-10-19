import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      const updatedCart = cart.map(cartItem => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          };
        }
        return cartItem;
      });

      setCart(updatedCart);
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId);
    setCart(cartUpdated);

    if (cartUpdated.length === 0) {
      clearCart();
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  };

  const tot = cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  const totQuantity = cart.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, isInCart, tot, totQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
