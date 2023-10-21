import { useContext } from 'react';
import classes from './CartItem.module.css';
import CartItemsContext from '../../store/cartitems-context';

function CartItem({ cartItem }) {
  const cartItemsctx = useContext(CartItemsContext);
  const cartitem = { name: cartItem.name, price: cartItem.price, quantity: 1 };

  const onAdd = () => cartItemsctx.addItem(cartitem);
  const onRemove = () => cartItemsctx.removeItem(cartitem);

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
        <button type="button" onClick={onRemove}>
          -
        </button>
        <button type="button" onClick={onAdd}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
