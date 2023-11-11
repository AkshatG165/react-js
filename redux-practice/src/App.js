import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, sendCartData } from './store/cart-slice';
import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart.items);
  const initialised = useSelector((state) => state.cart.initialised);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    let timer;
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (initialised) {
      dispatch(sendCartData(cart));
      timer = setTimeout(() => dispatch(uiActions.resetNotification()), 3000);
    }
    return () => clearTimeout(timer);
  }, [cart, initialised, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
