import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartContext from './store/cart-context';
import Cart from './components/Cart/Cart';
import CartItemsProvider from './store/CartItemsProvider';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContext.Provider
      value={{ showCart: showCart, setShowCart: setShowCart }}
    >
      <CartItemsProvider>
        {showCart && <Cart />}
        <Header />
        <Meals />
      </CartItemsProvider>
    </CartContext.Provider>
  );
}

export default App;
