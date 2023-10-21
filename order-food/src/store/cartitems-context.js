import React from 'react';

const CartItemsContext = React.createContext({
  cartItems: [],
  dispatchCartItems: () => {},
  addItem: () => {},
  removeItem: () => {},
});

export default CartItemsContext;
