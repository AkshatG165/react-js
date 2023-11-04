import { useContext } from 'react';
import cartItemsContext from '../store/cartItems-context';

export default function Cart(props) {
  const cartItemCtx = useContext(cartItemsContext);
  const onCartHandler = () => props.setShowCart(true);
  return (
    <button type="button" onClick={onCartHandler}>
      Cart ({cartItemCtx.cartItems.length})
    </button>
  );
}
