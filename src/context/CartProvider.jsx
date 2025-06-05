import { useState } from "react";
import { CartContext } from "./CartContext";
import PropTypes from "prop-types";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems((currentItems) => {
      const exisitingItem = currentItems.find((item) => item.id === product.id);

      if (exisitingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (productId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, quantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  let cartCount = 0
  for(const item of items) {
    cartCount = cartCount + item.quantity
  }

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
