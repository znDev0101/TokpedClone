import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProduct: [],
  totalPrice: 0,
  totalCart: 0,
  selectedProduct: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id: productID, value, price } = action.payload;
      const findProduct = state.cartProduct.findIndex(({ id }) => id == parseInt(productID));
      if (findProduct >= 0) {
        state.cartProduct[findProduct].stock -= 1;
        if (state.cartProduct[findProduct].stock !== 0) {
          state.cartProduct[findProduct].quantity += 1;
          state.totalCart += 1;
          state.cartProduct[findProduct].price += price;
        }
      } else {
        state.cartProduct.push({ ...value[0], price: price, quantity: 1, stock: value[0].stock - 1 });
        state.totalCart += 1;
      }
    },
    incrementCart: (state, action) => {
      const { id: productID, price } = action.payload;
      const findProduct = state.cartProduct.findIndex(({ id }) => id == parseInt(productID));
      if (findProduct >= 0) {
        if (state.cartProduct[findProduct].stock !== 0) {
          state.cartProduct[findProduct].stock -= 1;
          state.cartProduct[findProduct].quantity += 1;
          state.cartProduct[findProduct].price += price;
        }
      }
    },
    sumPrice: (state, action) => {
      const { id: productID } = action.payload;
      const findProduct = state.cartProduct.findIndex(({ id }) => id == parseInt(productID));
      state.totalPrice += state.cartProduct[findProduct].price;
    },
    selectProduct: (state, action) => {
      state.selectedProduct.push();
    },
  },
});

export const { addToCart, incrementCart, sumPrice, selectProduct } = cartSlice.actions;

export default cartSlice.reducer;
