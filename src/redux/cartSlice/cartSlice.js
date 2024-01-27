import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartSlice: [],
  totalPrice: 0,
  totalCart: 0,
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id: productID, value } = action.payload;
      const findProduct = state.cartSlice.findIndex(({ id }) => id == parseInt(productID));
      if (findProduct >= 0) {
        state.cartSlice[findProduct].stock -= 1;
        if (state.cartSlice[findProduct].stock !== 0) {
          state.cartSlice[findProduct].quantity += 1;
          state.totalCart += 1;
        }
      } else {
        state.cartSlice.push({ ...value[0], quantity: 1, stock: value[0].stock - 1 });
        state.totalCart += 1;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
