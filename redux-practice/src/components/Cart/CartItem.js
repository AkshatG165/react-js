import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, price } = props.item;
  const total = quantity * price;

  const onAdd = () =>
    dispatch(cartActions.addItem({ title, price, quantity: 1 }));
  const onRemove = () =>
    dispatch(cartActions.removeItem({ title, price, quantity: 1 }));

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={onRemove}>
            -
          </button>
          <button type="button" onClick={onAdd}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
