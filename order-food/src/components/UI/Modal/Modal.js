import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import classes from './Modal.module.css';

const Backdrop = () => <div className={`${classes['backdrop']}`} />;
const Overlay = (props) => {
  return <Card className={`${classes['modal']}`}>{props.children}</Card>;
};

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
}

export default Modal;
