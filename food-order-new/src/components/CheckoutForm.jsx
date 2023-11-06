import Modal from './Modal';

export default function CheckoutForm(props) {
  const onClose = () => props.setShowCheckoutForm(false);
  const onOrder = (e) => {
    e.preventDefault();
    console.log('Ordering...');
  };
  return (
    <Modal>
      <form id="checkout-form" onSubmit={onOrder}>
        <h1>Checkout</h1>
        <p>Total Amount: $89.95</p>
        <div className="control">
          <label htmlFor="full-name">Full Name</label>
          <input id="full-name" type="text" name="full-name" required />
        </div>
        <div className="control">
          <label htmlFor="full-name">E-Mail Address</label>
          <input id="email" type="email" name="email" required />
        </div>
        <div className="control">
          <label htmlFor="full-name">Street</label>
          <input id="street" type="text" name="street" required />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="full-name">Postal Code</label>
            <input id="postal-code" type="text" name="postal-code" required />
          </div>
          <div className="control">
            <label htmlFor="full-name">City</label>
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
    </Modal>
  );
}
