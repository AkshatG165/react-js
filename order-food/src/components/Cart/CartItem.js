import classes from './CartItem.module.css';

function CartItem({ cartItem }) {
  return (
    <div className={classes['cart-item']}>
      <div>
        <p className={classes['name']}>{cartItem.name}</p>
        <div className={classes['details']}>
          <span className={classes['price']}>${cartItem.price}</span>
          <span className={classes['quantity']}>x{cartItem.quantity}</span>
        </div>
      </div>
      <div>
        <button type="button">-</button>
        <button type="button">+</button>
      </div>
    </div>
  );
}

export default CartItem;
