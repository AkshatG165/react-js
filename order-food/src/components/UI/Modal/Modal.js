import React from 'react';
import ReactDOM from 'react-dom';
import Cart from '../../Cart/Cart';
import Card from '../Card/Card';
import classes from './Modal.module.css';

const Backdrop = () => <div className={`${classes['backdrop']}`} />;
const Overlay = () => {
  return (
    <Card className={`${classes['modal']}`}>
      <Cart />
    </Card>
  );
};

function Modal() {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
}

export default Modal;
