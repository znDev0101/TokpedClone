import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './redux/cartSlice/cartSlice';
import { ecommerceApi } from './redux/services/ecommerceApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import wishListSlice from './redux/wishlistSlice/wishListSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishList: wishListSlice,
    [ecommerceApi.reducerPath]: ecommerceApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ecommerceApi.middleware),
});

setupListeners(store.dispatch);
