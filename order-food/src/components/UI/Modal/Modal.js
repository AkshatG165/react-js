import Cart from '../../Cart/Cart';
import Card from '../Card/Card';
import classes from './Modal.module.css';

function Modal(props) {
  return (
    <Card className={`${classes['modal']}`}>
      <Cart onModalClose={props.onModalClose} />
    </Card>
  );
}

export default Modal;
