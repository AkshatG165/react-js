import classes from './HeaderCart.module.css';
import CartIcon from '../Cart/CartIcon';

function HeaderCart() {
  return (
    <button className={classes['button']}>
      <span className={classes['icon']}>
        <CartIcon />
      </span>
      <span className={classes['text']}>Your Cart</span>
      <span className={classes['badge']}>3</span>
    </button>
  );
}

export default HeaderCart;
