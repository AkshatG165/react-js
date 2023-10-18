import { useState, Fragment } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const onModalLoad = () => setShowModal(true);
  const onModalClose = () => setShowModal(false);

  return (
    <Fragment>
      <Header onModalLoad={onModalLoad} />
      <Meals />
      {showModal && <Modal onModalClose={onModalClose} />}
    </Fragment>
  );
}

export default App;
