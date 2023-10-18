import { useContext } from 'react';
import classes from './HeaderCart.module.css';
import CartIcon from '../Cart/CartIcon';
import ModalContext from '../../context/modal-context';

function HeaderCart() {
  const modalctx = useContext(ModalContext);
  const onClick = () => modalctx.setShowModal(true);

  return (
    <button className={classes['button']} onClick={onClick}>
      <span className={classes['icon']}>
        <CartIcon />
      </span>
      <span className={classes['text']}>Your Cart</span>
      <span className={classes['badge']}>3</span>
    </button>
  );
}

export default HeaderCart;
