import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems).map((item) => (
    <CartItem key={item.title} item={item} />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length ? <ul>{cartItems}</ul> : <p>Your cart is empty!</p>}
    </Card>
  );
};

export default Cart;
