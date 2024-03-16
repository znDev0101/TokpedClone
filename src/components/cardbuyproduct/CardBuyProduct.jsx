import React, { useState, useEffect, useRef } from "react"
import { addToCartOnDekstop } from "../../redux/cartSlice/cartSlice"
import { useDispatch } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHeart as faHeartSolid,
  faMinus,
  faPlus,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons"
import { faMessage } from "@fortawesome/free-regular-svg-icons"
import { toast, Bounce } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const CardBuyProduct = ({
  id,
  data,
  wishListHeartBoolean,
  indexHeartBoolean,
  handleClickAddToWishList,
  isAnimation,
  setIsAnimation,
  ...otherData
}) => {
  const { quantity: quantityProduct, stock, price, title, image } = otherData

  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(0)
  const [stockProduct, setStockProduct] = useState(0)
  const [priceProduct, setPriceProduct] = useState([])

  useEffect(() => {
    setQuantity(quantityProduct + 1)
    setStockProduct(stock - 1)
    setPriceProduct(price)
  }, [price, stock, quantityProduct])

  const handleAddToCartOnDekstop = () => {
    dispatch(
      addToCartOnDekstop({
        id,
        image,
        priceProduct: price,
        price: priceProduct,
        title,
        quantity,
      })
    )
    toast.success("Berhasil menambahkan ke keranjang", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })
  }

  const handleIncrement = () => {
    if (stockProduct !== 0) {
      setQuantity((prev) => prev + 1)
      setStockProduct((prev) => prev - 1)
      setPriceProduct((prev) => prev + price)
    } else {
      toast.warn("Maaf stock barang sudah habis", {
        position: "bottom-right",
        autoClose: 2000,
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

  const handleDecrement = () => {
    if (quantity !== 1) {
      setQuantity((prev) => prev - 1)
      setStockProduct((prev) => prev + 1)
      setPriceProduct((prev) => prev - price)
    }
  }

  return (
    <div className="w-full h-max sticky top-36 right-0 row-[1] max-w-[260px] bg-white border border-gray-300 rounded-md pb-4 ">
      <h1 className="font-bold ps-4 pt-3">Atur Jumlah dan Catatan</h1>
      {/* counter cart */}
      <div className="flex items-center mt-4 ps-4 gap-x-4">
        <div className="flex justify-center items-center border border-gray-300 rounded-lg px-1 py-1 gap-x-2">
          <button
            className="text-green-600 text-lg hover:bg-gray-100 px-2"
            onClick={handleDecrement}>
            <FontAwesomeIcon icon={faMinus} size="xs" />
          </button>
          <span>{quantity}</span>
          <button
            className="text-green-600 text-lg hover:bg-gray-100 px-2"
            onClick={handleIncrement}>
            <FontAwesomeIcon icon={faPlus} size="xs" />
          </button>
        </div>
        <span>
          Stok: <span className="font-bold">{stockProduct}</span>
        </span>
      </div>
      <div className="flex justify-between px-3 mt-5 items-center">
        <span>Subtotal</span>
        <span className="font-bold">${priceProduct}</span>
      </div>
      <div className="w-full flex flex-col gap-y-2 px-2 mt-4">
        <button
          className="bg-green-500 font-bold text-white py-1 rounded-md"
          onClick={handleAddToCartOnDekstop}>
          Keranjang
        </button>
        <button className="bg-white font-bold text-green-500 border border-green-500 py-1 rounded-md">
          Beli
        </button>
      </div>
      <div className="flex justify-center items-center gap-x-3 mt-5">
        <div className="flex items-center gap-x-2 hover:cursor-pointer">
          <FontAwesomeIcon icon={faMessage} />
          <span className="font-bold text-xs">Chat</span>
        </div>
        <span>|</span>
        <div className="flex items-center gap-x-2 hover:cursor-pointer">
          <span>
            <FontAwesomeIcon
              icon={
                wishListHeartBoolean[indexHeartBoolean]?.boolean
                  ? faHeartSolid
                  : faHeartRegular
              }
              onClick={handleClickAddToWishList}
              className={
                wishListHeartBoolean[indexHeartBoolean]?.boolean
                  ? `text-pink-500 ${isAnimation && `animate-heart`}`
                  : ``
              }
              onAnimationEnd={() => setIsAnimation(false)}
            />
          </span>
          <span className="font-bold text-xs">WishList</span>
        </div>

        <span>|</span>
        <div className="flex items-center gap-x-2 hover:cursor-pointer">
          <FontAwesomeIcon icon={faShareNodes} />
          <span className="font-bold text-xs">Share</span>
        </div>
      </div>
    </div>
  )
}

export default CardBuyProduct
