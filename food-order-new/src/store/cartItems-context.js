import React from 'react';

const CartItemsContext = React.createContext({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  resetCart: () => {},
});

export default CartItemsContext;
