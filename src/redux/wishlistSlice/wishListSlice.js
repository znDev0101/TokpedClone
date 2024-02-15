import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishListHeartBoolean: [],
  wishListProduct: [],
};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addWishListHeartBoolean: (state, action) => {
      const { id } = action.payload;
      const findIndexWishListHeart = state.wishListHeartBoolean.findIndex((data) => data.id == id);
      if (state.wishListHeartBoolean[findIndexWishListHeart] === undefined) state.wishListHeartBoolean.push({ id: id, boolean: false });
    },
    setBooleanWishList: (state, action) => {
      const { id } = action.payload;
      const findIndexWishListHeart = state.wishListHeartBoolean.findIndex((data) => data.id == id);
      if (!state.wishListHeartBoolean[findIndexWishListHeart].boolean) {
        state.wishListHeartBoolean[findIndexWishListHeart].boolean = true;
      } else {
        state.wishListHeartBoolean[findIndexWishListHeart].boolean = false;
      }
    },
    addProductToWishList: (state, action) => {
      const { id, category, title, description, image, priceProduct, rating } = action.payload;
      state.wishListProduct.push({
        id: id,
        category: category,
        title: title,
        image: image,
        description: description,
        price: priceProduct,
        rating: rating,
        terjual: '999 terjual',
      });
    },
    removeProductToWishList: (state, action) => {
      const { id } = action.payload;
      state.wishListProduct = state.wishListProduct.filter((data) => data.id != id);
    },
    // removeDuplicateArr: (state, action) => {
    //   state.wishListProduct = state.wishListProduct.filter((value, index) => {
    //     state.wishListProduct.indexOf(value) === index;
    //   });
    // },
  },
});

export const { addWishListHeartBoolean, setBooleanWishList, addProductToWishList, removeProductToWishList, removeDuplicateArr } = wishListSlice.actions;

export default wishListSlice.reducer;
