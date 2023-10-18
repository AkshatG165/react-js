import Cart from '../../Cart/Cart';
import Card from '../Card/Card';
import classes from './Modal.module.css';

function Modal() {
  return (
    <Card className={`${classes['modal']}`}>
      <Cart />
    </Card>
  );
}

export default Modal;
