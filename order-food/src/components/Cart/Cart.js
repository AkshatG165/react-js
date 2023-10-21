import { useContext } from 'react';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import CartItemsContext from '../../store/cartitems-context';

function Cart() {
  const cartItemsctx = useContext(CartItemsContext);
  const cartItems = cartItemsctx.cartItems;
  const cartItemList = cartItems.map((cartItem) => (
    <li key={cartItem.name}>
      <CartItem cartItem={cartItem} />
    </li>
  ));

  const totalAmount = cartItems
    .map((cartItem) => cartItem.price * cartItem.quantity)
    .reduce((sum, currentValue) => sum + currentValue, 0);

  const onOrder = () => console.log('Ordering...');

  const cartctx = useContext(CartContext);
  const onClick = () => cartctx.setShowCart(false);

  return (
    <Modal>
      <ul className={classes['cart-list']}>{cartItemList}</ul>
      <div className={classes['total']}>
        <h3>Total Amount</h3>
        <h3>${totalAmount}</h3>
      </div>
      <div className={classes['buttons']}>
        <button
          type="button"
          className={`${classes['btn']} ${classes['close']}`}
          onClick={onClick}
        >
          Close
        </button>
        <button
          type="button"
          className={`${classes['btn']} ${classes['order']}`}
          onClick={onOrder}
        >
          Order
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
