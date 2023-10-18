import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal/Modal';
import ModalContext from './context/modal-context';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{ showModal: showModal, setShowModal: setShowModal }}
    >
      <Header />
      <Meals />
      {showModal && <Modal />}
    </ModalContext.Provider>
  );
}

export default App;
