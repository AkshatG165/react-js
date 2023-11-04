import { useState } from 'react';
import CartItems from './components/CartItems';
import Header from './components/Header';
import Menu from './components/Menu';
import CartItemsProvider from './store/CartItemsProvider';

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <CartItemsProvider>
        <Header setShowCart={setShowCart} />
        {showCart && <CartItems setShowCart={setShowCart} />}
        <Menu />
      </CartItemsProvider>
    </>
  );
}

export default App;
