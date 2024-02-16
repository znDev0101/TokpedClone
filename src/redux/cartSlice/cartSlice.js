import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProduct: [],
  totalPrice: 0,
  totalCart: 0,
  selectedProduct: [],
  cartBoolean: [],
  firstCartProduct: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, value, price, title, description } = action.payload;
      const findCartProduct = state.cartProduct.findIndex((data) => data.id == id);
      const findFirstCartProduct = state.firstCartProduct.findIndex((data) => data.id == id);
      if (findCartProduct >= 0) {
        if (state.cartProduct[findCartProduct].stock !== 0) {
          state.cartProduct[findCartProduct].stock -= 1;
          state.cartProduct[findCartProduct].quantity += 1;
          state.totalCart += 1;
          state.cartProduct[findCartProduct].price += price;
          state.firstCartProduct[findFirstCartProduct].cart += 1;
        }
      } else {
        state.cartProduct.push({ ...value[0], title: title, description: description, price: price, quantity: 1, stock: value[0].stock - 1 });
        state.cartBoolean.push({ id: id, boolean: false });
        state.firstCartProduct.push({ id, cart: 1 });
        state.totalCart += 1;
      }
    },
    incrementCart: (state, action) => {
      const { id, priceProduct } = action.payload;
      const findCartProduct = state.cartProduct.findIndex((data) => data.id == id);
      const findSelectedProduct = state.selectedProduct.findIndex((data) => data.id == id);
      const findBooleanCart = state.cartBoolean.findIndex((data) => data.id == id);

      if (findCartProduct >= 0) {
        if (state.cartProduct[findCartProduct].stock !== 0 && !state.cartBoolean[findBooleanCart].boolean) {
          state.cartProduct[findCartProduct].stock -= 1;
          state.cartProduct[findCartProduct].quantity += 1;
          state.cartProduct[findCartProduct].price += priceProduct;
          state.totalCart += 1;
        }
        if (state.cartBoolean[findBooleanCart].boolean) {
          state.cartProduct[findCartProduct].stock -= 1;
          state.cartProduct[findCartProduct].quantity += 1;
          state.cartProduct[findCartProduct].price += priceProduct;
          state.selectedProduct[findSelectedProduct].price += priceProduct;
          state.selectedProduct[findSelectedProduct].quantity += 1;
          state.selectedProduct[findSelectedProduct].stock -= 1;
          state.totalCart += 1;
        }
      }
    },
    decrementCart: (state, action) => {
      const { id, priceProduct } = action.payload;
      const findCartProduct = state.cartProduct.findIndex((data) => data.id == id);
      const findSelectedProduct = state.selectedProduct.findIndex((data) => data.id == id);
      const findBooleanCart = state.cartBoolean.findIndex((data) => data.id == id);
      if (findCartProduct >= 0) {
        if (parseInt(state.cartProduct[findCartProduct].quantity) !== 0 && !state.cartBoolean[findBooleanCart].boolean) {
          state.cartProduct[findCartProduct].stock += 1;
          state.cartProduct[findCartProduct].quantity -= 1;
          state.cartProduct[findCartProduct].price -= priceProduct;
          state.totalCart -= 1;
        }
        if (state.cartBoolean[findBooleanCart].boolean) {
          state.cartProduct[findCartProduct].stock += 1;
          state.cartProduct[findCartProduct].quantity -= 1;
          state.cartProduct[findCartProduct].price -= priceProduct;
          state.selectedProduct[findSelectedProduct].price -= priceProduct;
          state.selectedProduct[findSelectedProduct].quantity -= 1;
          state.selectedProduct[findSelectedProduct].stock += 1;
          state.totalCart -= 1;
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
      const { id } = action.payload;
      state.cartProduct
        .filter((data) => data.id == id)
        .map((data) => {
          state.selectedProduct.push(data);
        });
      const totalPrice = state.selectedProduct.reduce((accumulator, { price }) => {
        return accumulator + price;
      }, 0);
      state.totalPrice = totalPrice;
    },
    selectCancelCartProduct: (state, action) => {
      const { id } = action.payload;
      if (state.selectedProduct.length !== 0) {
        state.selectedProduct = state.selectedProduct.filter((data) => data.id != id);
      }
      if (state.totalPrice !== 0) {
        const totalPrice = state.selectedProduct.reduce((accumulator, { price }) => {
          return accumulator + price;
        }, 0);
        state.totalPrice = totalPrice;
      }
    },
    booleanCart: (state, action) => {
      const { id } = action.payload;
      const findCartProduct = state.cartProduct.findIndex((data) => data.id == id);
      state.cartBoolean[findCartProduct].boolean = !state.cartBoolean[findCartProduct].boolean;
    },
    trueAllBooleanChecked: (state, action) => {
      for (let i = 0; i < state.cartBoolean.length; i++) {
        if (state.cartBoolean[i].boolean !== true) {
          state.cartBoolean[i].boolean = true;
        }
      }
    },
    falseAllBooleanChecked: (state, action) => {
      for (let i = 0; i < state.cartBoolean.length; i++) {
        state.cartBoolean[i].boolean = false;
      }
    },
    resetTotalPrice: (state) => {
      state.totalPrice = 0;
      state.cartBoolean.map((data) => {
        data.boolean = false;
      });
    },
    removeCart: (state, action) => {
      const { id } = action.payload;
      state.cartProduct = state.cartProduct.filter((data) => data.id != id);

      state.firstCartProduct = state.firstCartProduct.filter((data) => data.id != id);
      state.selectedProduct = state.selectedProduct.filter((data) => data.id != id);
      if (state.totalPrice !== 0) {
        const totalPrice = state.selectedProduct.reduce((accumulator, { price }) => {
          return accumulator + price;
        }, 0);
        state.totalPrice = totalPrice;
      }
      state.cartBoolean = state.cartBoolean.filter((data) => data.id != id);
    },
    deleteCartProduct: (state) => {
      if (state.selectedProduct.length !== 0) {
        for (let i = 0; i < state.selectedProduct.length; i++) {
          state.cartProduct = state.cartProduct.filter((data) => data.id !== state.selectedProduct[i].id);
          state.cartBoolean = state.cartBoolean.filter((data) => data.id != state.selectedProduct[i].id);
          state.firstCartProduct = state.firstCartProduct.filter((data) => data.id != state.selectedProduct[i].id);
          state.totalPrice -= state.selectedProduct[i].price;
          if (state.selectedProduct[i].quantity > 1) state.totalCart = state.totalCart -= state.selectedProduct[i].quantity;

          if (state.selectedProduct[i].quantity == 1) state.totalCart -= 1;
        }
        state.selectedProduct = [];
      }
    },
  },
});

export const { addToCart, incrementCart, sumPrice, selectProduct, selectCancelCartProduct, resetTotalPrice, decrementCart, removeCart, booleanCart, booleanChecked, trueAllBooleanChecked, falseAllBooleanChecked, deleteCartProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
