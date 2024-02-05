import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProduct: [],
  totalPrice: 0,
  totalCart: 0,
  selectedProduct: [],
  cartBoolean: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id: idCartProduct, value, priceProduct, title, description } = action.payload;
      const findCartProduct = state.cartProduct.findIndex(({ id }) => id == parseInt(idCartProduct));
      if (findCartProduct >= 0) {
        state.cartProduct[findCartProduct].stock -= 1;
        if (state.cartProduct[findCartProduct].stock !== 0) {
          state.cartProduct[findCartProduct].quantity += 1;
          state.totalCart += 1;
          state.cartProduct[findCartProduct].price += priceProduct;
        }
      } else {
        state.cartProduct.push({ ...value[0], title: title, description: description, price: priceProduct, quantity: 1, stock: value[0].stock - 1 });
        state.cartBoolean.push({ id: parseInt(idCartProduct), boolean: false });
        state.totalCart += 1;
      }
    },
    incrementCart: (state, action) => {
      const { id: idCartProduct, priceProduct } = action.payload;
      const findCartProduct = state.cartProduct.findIndex(({ id }) => id === idCartProduct);

      if (findCartProduct >= 0) {
        if (state.cartProduct[findCartProduct].stock !== 0) {
          state.cartProduct[findCartProduct].stock -= 1;
          state.cartProduct[findCartProduct].quantity += 1;
          state.cartProduct[findCartProduct].price += priceProduct;
        }
      }
    },
    decrementCart: (state, action) => {
      const { id: idCartProduct, priceProduct } = action.payload;
      const findCartProduct = state.cartProduct.findIndex(({ id }) => id === idCartProduct);
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
      const { id: idCartProduct } = action.payload;
      state.cartProduct
        .filter(({ id }) => id === idCartProduct)
        .map((data) => {
          state.selectedProduct.push(data);
        });
      const totalPrice = state.selectedProduct.reduce((accumulator, { price }) => {
        return accumulator + price;
      }, 0);
      state.totalPrice = totalPrice;
    },
    selectCancelCartProduct: (state, action) => {
      const { id: idCartProduct } = action.payload;
      if (state.selectedProduct.length !== 0) {
        state.selectedProduct = state.selectedProduct.filter(({ id }) => id !== idCartProduct);
      }
      if (state.totalPrice !== 0) {
        const totalPrice = state.selectedProduct.reduce((accumulator, { price }) => {
          return accumulator + price;
        }, 0);
        state.totalPrice = totalPrice;
      }
    },
    booleanCart: (state, action) => {
      const { id: idCartProduct } = action.payload;
      const findCartProduct = state.cartProduct.findIndex(({ id }) => id === idCartProduct);
      state.cartBoolean[findCartProduct].boolean = !state.cartBoolean[findCartProduct].boolean;
    },
    trueAllBooleanChecked: (state, action) => {
      for (let i = 0; i < state.cartProduct.length; i++) {
        if (state.cartProduct[i].boolean !== true) {
          state.cartProduct[i].boolean = true;
        }
      }
    },
    falseAllBooleanChecked: (state, action) => {
      for (let i = 0; i < state.cartProduct.length; i++) {
        if (state.cartProduct[i].boolean !== false) {
          state.cartProduct[i].boolean = false;
        }
      }
    },
    resetTotalPrice: (state) => {
      state.totalPrice = 0;
    },
    removeCart: (state, action) => {
      const { id: idCartProduct } = action.payload;
      state.cartProduct = state.cartProduct.filter(({ id }) => id !== idCartProduct);
      state.totalCart -= 1;
      state.selectedProduct = state.selectedProduct.filter(({ id }) => id !== idCartProduct);
      if (state.totalPrice !== 0) {
        const totalPrice = state.selectedProduct.reduce((accumulator, { price }) => {
          return accumulator + price;
        }, 0);
        state.totalPrice = totalPrice;
      }
      state.cartBoolean = state.cartBoolean.filter(({ id }) => id !== idCartProduct);
    },
  },
});

export const { addToCart, incrementCart, sumPrice, selectProduct, selectCancelCartProduct, resetTotalPrice, decrementCart, removeCart, booleanCart, booleanChecked, trueAllBooleanChecked, falseAllBooleanChecked } = cartSlice.actions;

export default cartSlice.reducer;
