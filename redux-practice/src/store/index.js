import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { cartItems: [], showCart: false };
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem() {},
    removeItem() {},
    toogleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default configureStore({ reducer: cartSlice.reducer });
