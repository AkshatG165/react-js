import React from 'react';

const CartContext = React.createContext({
  showCart: false,
  setShowCart: () => {},
});

export default CartContext;
