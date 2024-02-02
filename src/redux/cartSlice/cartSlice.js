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
      const { id: productID, value, priceProduct } = action.payload;
      const findCartProduct = state.cartProduct.findIndex(({ id }) => id == parseInt(productID));
      if (findCartProduct >= 0) {
        state.cartProduct[findCartProduct].stock -= 1;
        if (state.cartProduct[findCartProduct].stock !== 0) {
          state.cartProduct[findCartProduct].quantity += 1;
          state.totalCart += 1;
          state.cartProduct[findCartProduct].price += priceProduct;
        }
      } else {
        state.cartProduct.push({ ...value[0], price: priceProduct, quantity: 1, stock: value[0].stock - 1 });
        state.totalCart += 1;
      }
    },
    incrementCart: (state, action) => {
      const { id: productID, priceProduct } = action.payload;
      const findCartProduct = state.cartProduct.findIndex(({ id }) => id == parseInt(productID));
      if (state.selectedProduct.length !== 0) {
        const findSelectedProdcut = state.selectedProduct.findIndex(({ id }) => id === productID);
        state.selectedProduct[findSelectedProdcut].price += priceProduct;
      }
      if (findCartProduct >= 0) {
        if (state.cartProduct[findCartProduct].stock !== 0) {
          state.cartProduct[findCartProduct].stock -= 1;
          state.cartProduct[findCartProduct].quantity += 1;
          state.cartProduct[findCartProduct].price += priceProduct;
        }
      }
    },
    decrementCart: (state, action) => {
      const { id: productID, priceProduct } = action.payload;
      const findCartProduct = state.cartProduct.findIndex(({ id }) => id === productID);

      if (findCartProduct >= 0) {
        if (parseInt(state.cartProduct[findCartProduct].quantity) !== 0) {
          state.cartProduct[findCartProduct].stock += 1;
          state.cartProduct[findCartProduct].quantity -= 1;
          state.cartProduct[findCartProduct].price -= priceProduct;
        }
      }
    },
    sumPrice: (state) => {
      const totalPrice = state.selectedProduct.reduce((accumulator, { price }) => {
        return accumulator + price;
      }, 0);
      state.totalPrice = totalPrice;
    },
    selectProduct: (state, action) => {
      const { id: productID, dataCart } = action.payload;
      dataCart
        .filter(({ id }) => id == parseInt(productID))
        .map(({ id, price }) => {
          state.selectedProduct.push({ id, price });
        });
      const totalPrice = state.selectedProduct.reduce((accumulator, { price }) => {
        return accumulator + price;
      }, 0);
      state.totalPrice = totalPrice;
    },
    selectCancelCartProduct: (state, action) => {
      const { id: productID } = action.payload;
      if (state.selectedProduct.length !== 0) {
        state.selectedProduct = state.selectedProduct.filter(({ id }) => id !== productID);
      }
      if (state.totalPrice !== 0) {
        const totalPrice = state.selectedProduct.reduce((accumulator, { price }) => {
          return accumulator + price;
        }, 0);
        state.totalPrice = totalPrice;
      }
    },
    resetTotalPrice: (state) => {
      state.totalPrice = 0;
    },
    removeCart: (state, action) => {
      const { id: cartProductId } = action.payload;
      state.cartProduct = state.cartProduct.filter(({ id }) => id !== cartProductId);
      state.totalCart -= 1;
    },
  },
});

export const { addToCart, incrementCart, sumPrice, selectProduct, selectCancelCartProduct, resetTotalPrice, decrementCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
