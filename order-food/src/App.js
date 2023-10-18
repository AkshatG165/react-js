import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal/Modal';

function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
      <Modal />
    </Fragment>
  );
}

export default App;
