import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/index';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const showCart = useSelector((state) => state.showCart);

  const onToggleCart = () => dispatch(cartActions.toogleCart());
  return (
    <button className={classes.button} type="button" onClick={onToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
