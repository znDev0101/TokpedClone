import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartProduct: [],
  totalPrice: 0,
  totalCart: 0,
  selectedProduct: [],
  cartBoolean: [],
}

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {
        id,
        data,
        price,
        title,
        description,
        selectWarnaVarianProduct,
        selectUkuranVarianProduct,
      } = action.payload
      const findCartProduct = state.cartProduct.findIndex(
        (data) => data.id == id
      )
      if (findCartProduct >= 0) {
        if (state.cartProduct[findCartProduct].stock !== 0) {
          state.cartProduct[findCartProduct].stock -= 1
          state.cartProduct[findCartProduct].quantity += 1
          state.totalCart += 1
          state.cartProduct[findCartProduct].price += price
        }
      } else {
        state.cartProduct.push({
          ...data[0],
          title: title,
          description: description,
          price: price,
          quantity: 1,
          stock: data[0].stock - 1,
          warna: selectWarnaVarianProduct,
          ukuran: selectUkuranVarianProduct,
        })
        state.cartBoolean.push({ id: id, boolean: false })
        state.totalCart += 1
      }
    },
    addToCartOnDekstop: (state, action) => {
      const {
        id,
        image,
        price,
        title,
        quantity,
        priceProduct,
        selectWarnaVarianProduct: warna,
        selectUkuranVarianProduct: ukuran,
      } = action.payload
      const indexCartProduct = state.cartProduct.findIndex(
        (data) => data.id == id
      )
      if (indexCartProduct != -1) {
        state.cartProduct[indexCartProduct].price = state.cartProduct[
          indexCartProduct
        ].price += price
        state.cartProduct[indexCartProduct].quantity = state.cartProduct[
          indexCartProduct
        ].quantity += quantity
        state.totalCart += quantity
      } else {
        state.cartProduct.push({
          id: id,
          price: price,
          imageProduct: image,
          priceProduct: priceProduct,
          title: title,
          quantity: quantity,
          warna: warna,
          ukuran: ukuran,
        })
        state.totalCart += quantity
        state.cartBoolean.push({ id: id, boolean: false })
      }
    },
    incrementCart: (state, action) => {
      const { id, priceProduct } = action.payload
      const findCartProduct = state.cartProduct.findIndex(
        (data) => data.id == id
      )
      const findSelectedProduct = state.selectedProduct.findIndex(
        (data) => data.id == id
      )
      const findBooleanCart = state.cartBoolean.findIndex(
        (data) => data.id == id
      )

      if (findCartProduct >= 0) {
        if (
          state.cartProduct[findCartProduct].stock !== 0 &&
          !state.cartBoolean[findBooleanCart].boolean
        ) {
          state.cartProduct[findCartProduct].stock -= 1
          state.cartProduct[findCartProduct].quantity += 1
          state.cartProduct[findCartProduct].price += priceProduct
          state.totalCart += 1
        }
        if (state.cartBoolean[findBooleanCart].boolean) {
          state.cartProduct[findCartProduct].stock -= 1
          state.cartProduct[findCartProduct].quantity += 1
          state.cartProduct[findCartProduct].price += priceProduct
          state.selectedProduct[findSelectedProduct].price += priceProduct
          state.selectedProduct[findSelectedProduct].quantity += 1
          state.selectedProduct[findSelectedProduct].stock -= 1
          state.totalCart += 1
        }
      }

      // ONLY ON DEKSTOP
    },
    decrementCart: (state, action) => {
      const { id, priceProduct } = action.payload
      const findCartProduct = state.cartProduct.findIndex(
        (data) => data.id == id
      )
      const findSelectedProduct = state.selectedProduct.findIndex(
        (data) => data.id == id
      )
      const findBooleanCart = state.cartBoolean.findIndex(
        (data) => data.id == id
      )
      if (findCartProduct >= 0) {
        if (
          parseInt(state.cartProduct[findCartProduct].quantity) !== 0 &&
          !state.cartBoolean[findBooleanCart].boolean
        ) {
          state.cartProduct[findCartProduct].stock += 1
          state.cartProduct[findCartProduct].quantity -= 1
          state.cartProduct[findCartProduct].price -= priceProduct
          state.totalCart -= 1
        }
        if (state.cartBoolean[findBooleanCart].boolean) {
          state.cartProduct[findCartProduct].stock += 1
          state.cartProduct[findCartProduct].quantity -= 1
          state.cartProduct[findCartProduct].price -= priceProduct
          state.selectedProduct[findSelectedProduct].price -= priceProduct
          state.selectedProduct[findSelectedProduct].quantity -= 1
          state.selectedProduct[findSelectedProduct].stock += 1
          state.totalCart -= 1
        }
      }
    },
    sumPrice: (state) => {
      const totalPrice = state.selectedProduct.reduce(
        (accumulator, { price }) => {
          return accumulator + price
        },
        0
      )
      state.totalPrice = totalPrice
    },
    selectProduct: (state, action) => {
      const { id } = action.payload
      state.cartProduct
        .filter((data) => data.id == id)
        .map((data) => {
          state.selectedProduct.push(data)
        })
      const totalPrice = state.selectedProduct.reduce(
        (accumulator, { price }) => {
          return accumulator + price
        },
        0
      )
      state.totalPrice = totalPrice
    },
    selectCancelCartProduct: (state, action) => {
      const { id } = action.payload
      if (state.selectedProduct.length !== 0) {
        state.selectedProduct = state.selectedProduct.filter(
          (data) => data.id != id
        )
      }
      if (state.totalPrice !== 0) {
        const totalPrice = state.selectedProduct.reduce(
          (accumulator, { price }) => {
            return accumulator + price
          },
          0
        )
        state.totalPrice = totalPrice
      }
    },
    booleanCart: (state, action) => {
      const { id } = action.payload
      const findCartProduct = state.cartProduct.findIndex(
        (data) => data.id == id
      )
      state.cartBoolean[findCartProduct].boolean =
        !state.cartBoolean[findCartProduct].boolean
    },
    trueAllBooleanChecked: (state) => {
      for (let i = 0; i < state.cartBoolean.length; i++) {
        if (state.cartBoolean[i].boolean !== true) {
          state.cartBoolean[i].boolean = true
        }
      }
    },
    falseAllBooleanChecked: (state, action) => {
      for (let i = 0; i < state.cartBoolean.length; i++) {
        state.cartBoolean[i].boolean = false
      }
    },
    resetTotalPrice: (state) => {
      state.totalPrice = 0
      state.cartBoolean.map((data) => {
        data.boolean = false
      })
    },
    removeCart: (state, action) => {
      const { id } = action.payload

      state.cartProduct = state.cartProduct.filter((data) => data.id != id)

      state.selectedProduct = state.selectedProduct.filter(
        (data) => data.id != id
      )

      if (state.totalPrice !== 0) {
        const totalPrice = state.selectedProduct.reduce(
          (accumulator, { price }) => {
            return accumulator + price
          },
          0
        )
        state.totalPrice = totalPrice
      }
      state.cartBoolean = state.cartBoolean.filter((data) => data.id != id)
    },
    deleteCartProduct: (state, action) => {
      const indexCartProduct = state.cartProduct.findIndex(
        (data) => data.id == action?.payload?.id
      )

      if (indexCartProduct !== -1) {
        if (
          state.cartProduct[indexCartProduct]?.quantity > 1 &&
          state.selectedProduct.length === 0
        ) {
          state.totalCart = state.totalCart -=
            state.cartProduct[indexCartProduct].quantity
          state.cartProduct = state.cartProduct.filter(
            (data) => data.id != action.payload?.id
          )
        } else {
          state.totalCart = state.totalCart -= 1
          state.cartProduct = state.cartProduct.filter(
            (data) => data.id != action.payload?.id
          )
        }

        state.cartBoolean = state.cartBoolean.filter(
          (data) => data.id != action.payload?.id
        )
      }

      if (state.selectedProduct.length !== 0) {
        state.selectedProduct.map((data) => {
          state.cartProduct = state.cartProduct.filter(
            ({ id }) => id != data.id
          )
          state.cartBoolean = state.cartBoolean.filter(
            ({ id }) => id != data.id
          )
          state.totalCart = state.totalCart -= data.quantity
        })

        state.selectedProduct = []
        state.totalPrice = 0
      }
    },
  },
})

export const {
  addToCart,
  addToCartOnDekstop,
  incrementCart,
  sumPrice,
  selectProduct,
  selectCancelCartProduct,
  resetTotalPrice,
  decrementCart,
  removeCart,
  booleanCart,
  booleanChecked,
  trueAllBooleanChecked,
  falseAllBooleanChecked,
  deleteCartProduct,
} = cartSlice.actions

export default cartSlice.reducer
