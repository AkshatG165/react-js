import React from 'react';

const CartItemsContext = React.createContext({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
});

export default CartItemsContext;
