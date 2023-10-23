import { useContext, useEffect, useState } from 'react';
import classes from './HeaderCart.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import CartItemsContext from '../../store/cartitems-context';

function HeaderCart() {
  const [runEffect, setRunEffect] = useState(false);
  const cartctx = useContext(CartContext);
  const cartItemsctx = useContext(CartItemsContext);
  const onClick = () => cartctx.setShowCart(true);
  const btnClasses = `${classes['button']} ${runEffect ? classes['bump'] : ''}`;

  useEffect(() => {
    if (cartItemsctx.cartItems.length === 0) return;
    setRunEffect(true);
    const timer = setTimeout(() => setRunEffect(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItemsctx.cartItems]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes['icon']}>
        <CartIcon />
      </span>
      <span className={classes['text']}>Your Cart</span>
      <span className={classes['badge']}>{cartItemsctx.cartItems.length}</span>
    </button>
  );
}

export default HeaderCart;
