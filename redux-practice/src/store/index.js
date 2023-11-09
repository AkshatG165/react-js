import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { cartItems: [], showCart: false };
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      if (state.cartItems.some((item) => item.title === action.payload.title)) {
        state.cartItems.forEach((item) => {
          if (item.title === action.payload.title)
            item.quantity += action.payload.quantity;
        });
      } else state.cartItems.push(action.payload);
    },
    removeItem(state, action) {
      state.cartItems.forEach((item) => {
        if (item.title === action.payload.title)
          item.quantity -= action.payload.quantity;
      });
      state.cartItems = state.cartItems.filter((item) => item.quantity > 0);
    },
    toogleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default configureStore({ reducer: cartSlice.reducer });
