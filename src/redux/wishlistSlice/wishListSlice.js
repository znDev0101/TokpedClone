import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  wishListHeartBoolean: [],
  wishListProduct: [],
  checkBoxWishListBoolean: [],
}

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addWishListHeartBoolean: (state, action) => {
      const { id } = action.payload
      const findIndexWishListHeart = state.wishListHeartBoolean.findIndex(
        (data) => data.id == id
      )
      if (state.wishListHeartBoolean[findIndexWishListHeart] === undefined)
        state.wishListHeartBoolean.push({ id: id, boolean: false })
    },
    setBooleanWishList: (state, action) => {
      const { id } = action.payload
      const findIndexWishListHeart = state.wishListHeartBoolean.findIndex(
        (data) => data.id == id
      )
      if (!state.wishListHeartBoolean[findIndexWishListHeart].boolean) {
        state.wishListHeartBoolean[findIndexWishListHeart].boolean = true
      } else {
        state.wishListHeartBoolean[findIndexWishListHeart].boolean = false
      }
    },
    addProductToWishList: (state, action) => {
      const { id, category, title, description, image, priceProduct, rating } =
        action.payload
      state.wishListProduct.push({
        id: id,
        category: category,
        title: title,
        image: image,
        description: description,
        price: priceProduct,
        rating: rating,
        terjual: "999 terjual",
      })
      state.checkBoxWishListBoolean.push({
        id: id,
        boolean: false,
      })
    },
    setCheckBoxBooleanWishList: (state, action) => {
      const { id } = action.payload
      const findIndexCheckBoxBoolean = state.checkBoxWishListBoolean.findIndex(
        (data) => data.id == id
      )
      state.checkBoxWishListBoolean[findIndexCheckBoxBoolean].boolean =
        !state.checkBoxWishListBoolean[findIndexCheckBoxBoolean].boolean
    },
    resetCheckBooleanFalse: (state) => {
      for (let i = 0; i < state.checkBoxWishListBoolean.length; i++) {
        state.checkBoxWishListBoolean[i].boolean = false
      }
    },
    removeProductFromWishList: (state, action) => {
      const { id } = action.payload
      state.wishListProduct = state.wishListProduct.filter(
        (data) => data.id != id
      )
      state.checkBoxWishListBoolean = state.checkBoxWishListBoolean.filter(
        (data) => data.id != id
      )
    },
    removeItemsFromWishList: (state) => {
      const idBooleanTrue = state.checkBoxWishListBoolean.filter(
        ({ boolean }) => boolean === true
      )
      state.checkBoxWishListBoolean = state.checkBoxWishListBoolean.filter(
        ({ boolean }) => boolean !== true
      )
      for (let i = 0; i < idBooleanTrue.length; i++) {
        state.wishListProduct = state.wishListProduct.filter(
          ({ id }) => id != idBooleanTrue[i].id
        )
        const findIndexWishListHeartBoolean =
          state.wishListHeartBoolean.findIndex(
            ({ id }) => id == idBooleanTrue[i].id
          )
        state.wishListHeartBoolean[findIndexWishListHeartBoolean].boolean =
          !state.wishListHeartBoolean[findIndexWishListHeartBoolean].boolean
      }
    },
  },
})

export const {
  addWishListHeartBoolean,
  setBooleanWishList,
  addProductToWishList,
  resetCheckBooleanFalse,
  removeProductFromWishList,
  removeItemsFromWishList,
  setCheckBoxBooleanWishList,
} = wishListSlice.actions

export default wishListSlice.reducer
