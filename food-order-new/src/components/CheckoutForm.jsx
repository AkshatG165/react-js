import { useContext, useState } from 'react';
import cartItemsContext from '../store/cartItems-context';
import Modal from './Modal';
import { PlaceOrder } from '../Http';
import Error from './Error';

export default function CheckoutForm(props) {
  const cartItemCtx = useContext(cartItemsContext);
  const [orderSuccessful, setOrderSuccessful] = useState(false);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const cartTotal = cartItemCtx.cartItems
    .map((item) => item.quantity * item.price)
    .reduce((total, currVal) => total + currVal, 0);

  const onClose = () => props.setShowCheckoutForm(false);
  const onOrder = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const order = {
      items: cartItemCtx.cartItems,
      customer: Object.fromEntries(fd.entries()),
    };

    setIsLoading(true);
    try {
      const res = await PlaceOrder(order);
      cartItemCtx.resetCart();
      if (res === 'Order created!') setOrderSuccessful(true);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError({ message: err });
    }
  };
  if (error)
    return (
      <Modal>
        <Error />
      </Modal>
    );
  if (orderSuccessful) {
    return (
      <Modal>
        <h1>Ordered Successfully</h1>
        <p>Thank you for ordering, hope to see you again!</p>
        <button className="button" type="button" onClick={onClose}>
          Close
        </button>
      </Modal>
    );
  }
  return (
    <Modal>
      {isLoading ? (
        <p>Ordering...</p>
      ) : (
        <form id="checkout-form" onSubmit={onOrder}>
          <h1>Checkout</h1>
          <p>Total Amount: ${cartTotal}</p>
          <div className="control">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" name="name" required />
          </div>
          <div className="control">
            <label htmlFor="email">E-Mail Address</label>
            <input id="email" type="email" name="email" required />
          </div>
          <div className="control">
            <label htmlFor="street">Street</label>
            <input id="street" type="text" name="street" required />
          </div>
          <div className="control-row">
            <div className="control">
              <label htmlFor="postal-code">Postal Code</label>
              <input id="postal-code" type="text" name="postal-code" required />
            </div>
            <div className="control">
              <label htmlFor="city">City</label>
              <input id="city" type="text" name="city" required />
            </div>
          </div>
          <div className="modal-actions">
            <button className="text-button" type="button" onClick={onClose}>
              Close
            </button>
            <button className="button">Submit Order</button>
          </div>
        </form>
      )}
    </Modal>
  );
}
