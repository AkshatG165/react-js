import { uiActions } from './ui-slice';
import { createSlice } from '@reduxjs/toolkit';
const url =
  'https://redux-practice-1b42c-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], initialised: false },
  reducers: {
    initialiseCart(state, action) {
      state.items = action.payload;
    },
    addItem(state, action) {
      if (state.items.some((item) => item.title === action.payload.title)) {
        state.items.forEach((item) => {
          if (item.title === action.payload.title)
            item.quantity += action.payload.quantity;
        });
      } else state.items.push(action.payload);
      state.initialised = true;
    },
    removeItem(state, action) {
      state.items.forEach((item) => {
        if (item.title === action.payload.title)
          item.quantity -= action.payload.quantity;
      });
      state.items = state.items.filter((item) => item.quantity > 0);
      state.initialised = true;
    },
  },
});

export function sendCartData(cart) {
  return async (dispatch) => {
    async function sendData(cart) {
      const res = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      if (!res.ok) throw new Error('Unable to fetch data');
    }

    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Request Sent',
        message: 'Sending data...',
      })
    );
    try {
      await sendData(cart);
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Request successfull!',
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Failed',
          message: e.message || 'Unable to fetch data',
        })
      );
    }
  };
}

export function getCartData(cart) {
  return async (dispatch) => {
    async function sendData() {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Unable to fetch data');
      const data = await res.json();
      return data;
    }

    try {
      var data = await sendData();
      if (!data) data = [];
      dispatch(cartSlice.actions.initialiseCart(data));
    } catch (e) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Failed',
          message: e.message || 'Unable to fetch data',
        })
      );
    }
  };
}

export const cartActions = cartSlice.actions;
export default cartSlice;
