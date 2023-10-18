import { Fragment } from 'react';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const DummyItems = [
  { name: 'Sushi', price: 22.99, quantity: 2 },
  { name: 'Schnitzel', price: 16.5, quantity: 2 },
  { name: 'Barbecue Burger', price: 12.99, quantity: 2 },
  { name: 'Green Bowl', price: 18.99, quantity: 2 },
];

function Cart() {
  const cartItemList = DummyItems.map((cartItem) => (
    <li key={cartItem.name}>
      <CartItem cartItem={cartItem} />
    </li>
  ));

  return (
    <Fragment>
      <ul className={classes['cart-list']}>{cartItemList}</ul>
      <div className={classes['total']}>
        <h3>Total Amount</h3>
        <h3>
          $
          {DummyItems.map(
            (cartItem) => cartItem.price * cartItem.quantity
          ).reduce((sum, currentValue) => sum + currentValue, 0)}
        </h3>
      </div>
      <div className={classes['buttons']}>
        <button
          type="button"
          className={`${classes['btn']} ${classes['close']}`}
        >
          Close
        </button>
        <button
          type="button"
          className={`${classes['btn']} ${classes['order']}`}
        >
          Order
        </button>
      </div>
    </Fragment>
  );
}

export default Cart;
