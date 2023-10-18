import classes from './HeaderCart.module.css';
import CartIcon from '../Cart/CartIcon';

function HeaderCart(props) {
  return (
    <button className={classes['button']} onClick={props.onModalLoad}>
      <span className={classes['icon']}>
        <CartIcon />
      </span>
      <span className={classes['text']}>Your Cart</span>
      <span className={classes['badge']}>3</span>
    </button>
  );
}

export default HeaderCart;
