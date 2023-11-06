import { useContext, useState } from 'react';
import cartItemsContext from '../store/cartItems-context';
import Modal from './Modal';

export default function CartItems(props) {
  const cartItemCtx = useContext(cartItemsContext);

  const cartItems = cartItemCtx.cartItems.map((item) => (
    <li key={item.name} className="cart-item">
      <p>{`${item.name} - ${item.quantity} X $${item.price}`}</p>
      <div className="cart-item-actions">
        <button type="button" onClick={() => cartItemCtx.removeItem(item)}>
          -
        </button>
        <p>{item.quantity}</p>
        <button type="button" onClick={() => cartItemCtx.addItem(item)}>
          +
        </button>
      </div>
    </li>
  ));
  const cartTotal = cartItemCtx.cartItems
    .map((item) => item.quantity * item.price)
    .reduce((total, currVal) => total + currVal, 0);

  const onClose = () => props.setShowCart(false);
  const onCheckout = () => {
    props.setShowCart(false);
    props.setShowCheckoutForm(true);
  };

  return (
    <Modal>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cartItemCtx.cartItems.length === 0 ? (
            <p className="empty">Your Cart is Empty!</p>
          ) : (
            cartItems
          )}
        </ul>
        <p className="cart-total">${cartTotal}</p>
      </div>
      <div className="modal-actions">
        <button className="text-button" type="button" onClick={onClose}>
          Close
        </button>
        <button className="button" type="button" onClick={onCheckout}>
          Go to Checkout
        </button>
      </div>
    </Modal>
  );
}
