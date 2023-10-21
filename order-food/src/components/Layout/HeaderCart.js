import { useContext } from 'react';
import classes from './HeaderCart.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import CartItemsContext from '../../store/cartitems-context';

function HeaderCart() {
  const cartctx = useContext(CartContext);
  const cartItemsctx = useContext(CartItemsContext);
  const onClick = () => cartctx.setShowCart(true);

  return (
    <button className={classes['button']} onClick={onClick}>
      <span className={classes['icon']}>
        <CartIcon />
      </span>
      <span className={classes['text']}>Your Cart</span>
      <span className={classes['badge']}>{cartItemsctx.cartItems.length}</span>
    </button>
  );
}

export default HeaderCart;
