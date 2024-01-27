import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './redux/cartSlice/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
