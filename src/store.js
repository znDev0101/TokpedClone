import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './redux/cartSlice/cartSlice';
import wishListSlice from './redux/wishlistSlice/wishListSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishList: wishListSlice,
  },
});
