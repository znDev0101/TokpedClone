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
      const { productId } = action.payload;
      const findIndexWishListHeart = state.wishListHeartBoolean.findIndex(({ id }) => id == productId);
      if (state.wishListHeartBoolean[findIndexWishListHeart] === undefined) state.wishListHeartBoolean.push({ id: productId, boolean: false });
    },
    setBooleanWishList: (state, action) => {
      const { productId } = action.payload;
      const findIndexWishListHeart = state.wishListHeartBoolean.findIndex(({ id }) => id == productId);
      if (state.wishListHeartBoolean[findIndexWishListHeart]) state.wishListHeartBoolean[findIndexWishListHeart].boolean = !state.wishListHeartBoolean[findIndexWishListHeart].boolean;
    },
    addProductToWishList: (state, action) => {
      const { productId, category, title, description, image, price, rating } = action.payload;

      state.wishListProduct.push({
        id: productId,
        category: category,
        title: title,
        image: image,
        description: description,
        price: price,
        rating: rating,
        terjual: '999 terjual',
      });
    },
    removeProductToWishList: (state, action) => {
      const { productId } = action.payload;
      state.wishListProduct = state.wishListProduct.filter(({ id }) => id != productId);
    },
  },
});

export const { addWishListHeartBoolean, setBooleanWishList, addProductToWishList, removeProductToWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
