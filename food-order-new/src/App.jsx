import { useState } from 'react';
import CartItems from './components/CartItems';
import Header from './components/Header';
import Menu from './components/Menu';
import CartItemsProvider from './store/CartItemsProvider';
import CheckoutForm from './components/CheckoutForm';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  return (
    <CartItemsProvider>
      <Header setShowCart={setShowCart} />
      {showCart && (
        <CartItems
          setShowCart={setShowCart}
          setShowCheckoutForm={setShowCheckoutForm}
        />
      )}
      {showCheckoutForm && (
        <CheckoutForm setShowCheckoutForm={setShowCheckoutForm} />
      )}
      <Menu />
    </CartItemsProvider>
  );
}

export default App;
