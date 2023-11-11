import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { showCart: false, notification: null },
  reducers: {
    toogleCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    resetNotification(state) {
      state.notification = null;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
