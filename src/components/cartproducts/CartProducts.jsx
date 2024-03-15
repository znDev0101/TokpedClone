import {
  faHeart as faHeartRegular,
  faNoteSticky,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons"
import {
  faHeart as faHeartSolid,
  faSoap,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toast, Bounce } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {
  incrementCart,
  selectCancelCartProduct,
  sumPrice,
  selectProduct,
  decrementCart,
  removeCart,
  booleanChecked,
  booleanCart,
  deleteCartProduct,
} from "../../redux/cartSlice/cartSlice"
import {
  setBooleanWishList,
  addProductToWishList,
  removeProductFromWishList,
} from "../../redux/wishlistSlice/wishListSlice"

const CartProducts = ({
  id,
  title,
  image,
  dataCartProduct,
  price: priceProduct,
  category,
  description,
  rating,
  handleDelete,
}) => {
  const { cartBoolean } = useSelector((state) => state.cart)
  const { wishListHeartBoolean } = useSelector((state) => state.wishList)
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState([])
  const [indexWishListBoolean, setIndexWishListBoolean] = useState(0)

  const { price, stock, quantity } = dataCartProduct

  useEffect(() => {
    if (cartBoolean.length !== 0) {
      const filterCartBoolean = cartBoolean.filter((data) => data.id == id)
      setIsChecked(filterCartBoolean[0].boolean)
    }
  }, [cartBoolean])

  useEffect(() => {
    if (isChecked === true) {
      dispatch(selectProduct({ id }))
    } else {
      dispatch(selectCancelCartProduct({ id }))
    }
  }, [isChecked])

  useEffect(() => {
    const findIndexWishListboolean = wishListHeartBoolean.findIndex(
      (data) => data.id == id
    )
    setIndexWishListBoolean(findIndexWishListboolean)
  }, [])

  useEffect(() => {
    if (quantity === 0) {
      dispatch(removeCart({ id }))
      toast.warn("🗑️, belanjaan kamu di hapus dari keranjang", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    }
  }, [quantity])

  const handleChange = () => {
    dispatch(booleanCart({ id }))
  }

  const handleWishlist = () => {
    const findIndexWishListBoolean = wishListHeartBoolean.findIndex(
      (data) => data.id == id
    )

    dispatch(setBooleanWishList({ id }))
    if (wishListHeartBoolean[findIndexWishListBoolean]?.boolean) {
      dispatch(removeProductFromWishList({ id }))
      toast.info("🗑️, Barang berhasil di hapus dari wishlist", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    } else {
      dispatch(
        addProductToWishList({
          id: id,
          category,
          title,
          description,
          image,
          priceProduct,
          rating,
        })
      )
      toast.success("❤️, Barang berhasil menambahkan ke wishlist", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    }
  }

  const handleIncrement = () => {
    if (stock !== 0) {
      dispatch(incrementCart({ id, priceProduct }))
      dispatch(sumPrice())
    }
  }

  const handleDecrement = () => {
    dispatch(decrementCart({ id, priceProduct }))
    dispatch(sumPrice())
  }

  return (
    <div className="pt-5 flex px-5 py-1 lg:mt-0 lg:bg-white lg:rounded-md">
      <div className="w-5 h-5 flex-[0_0_auto]">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className="w-full h-full hover:cursor-pointer"
        />
      </div>
      <div className="w-full h-full relative grid grid-cols-[max-content_1fr] lg:grid-cols-[max-content_1fr] gap-x-1">
        <div className="w-32 h-32">
          <Link to={`/product_detail/${id}`}>
            <img
              src={image}
              alt="img-product"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
        <div className="w-full flex flex-col  gap-y-1 lg:place-content-between lg:py-2">
          <Link
            to={`/product_detail/${id}`}
            className="flex flex-col  justify-between lg:items-start">
            <div className="w-full flex flex-col">
              <h5
                className={
                  stock === 0 ? `text-red-700 font-bold` : `text-black`
                }>
                {stock < 5 && `sisa ${stock}`}
              </h5>
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <h5>
                  {title.length > 20 ? `${title.slice(0, 20)}` : `${title}`}
                </h5>
                <span className="font-bold lg:text-lg">${price}</span>
              </div>
            </div>
          </Link>
          <div className=" flex lg:flex items-center pt-7  justify-between lg:justify-end lg:gap-x-4 lg:bottom-2">
            <div className="flex gap-x-5 ">
              {screen.width <= 428 ? (
                <FontAwesomeIcon
                  icon={faNoteSticky}
                  size="lg"
                  className="text-gray-400"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faTrashCan}
                  onClick={() => handleDelete(id)}
                  size="lg"
                  className="text-gray-400 hover:cursor-pointer"
                />
              )}
              {wishListHeartBoolean[indexWishListBoolean]?.boolean == true ? (
                <FontAwesomeIcon
                  icon={faHeartSolid}
                  onClick={handleWishlist}
                  className="text-pink-600 hover:cursor-pointer"
                  size="lg"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHeartRegular}
                  onClick={handleWishlist}
                  size="lg"
                  className="hover:cursor-pointer text-gray-400"
                />
              )}
            </div>
            <div className="flex justify-between items-center w-20 h-6 rounded-md border border-gray-500  p-1 ">
              <button
                className="text-xl text-green-600"
                onClick={handleDecrement}>
                -
              </button>
              <span>{quantity}</span>
              <button
                className="text-xl text-green-600"
                onClick={handleIncrement}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProducts
