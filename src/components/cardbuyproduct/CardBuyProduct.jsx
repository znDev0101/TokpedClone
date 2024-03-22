import React, { useState, useEffect, useRef } from "react"
import { addToCartOnDekstop } from "../../redux/cartSlice/cartSlice"
import { useDispatch } from "react-redux"
import { FaHeart, FaMinus, FaRegHeart } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa6"
import { BiMessageDetail } from "react-icons/bi"
import { GrShareOption } from "react-icons/gr"

import { toast, Bounce } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const CardBuyProduct = ({
  id,
  data,
  wishListHeartBoolean,
  indexHeartBoolean,
  handleClickAddToWishList,
  selectWarnaVarianProduct,
  selectUkuranVarianProduct,
  filterVarianProduct,
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
        selectWarnaVarianProduct,
        selectUkuranVarianProduct,
      })
    )
    toast.success("Berhasil menambahkan ke keranjang", {
      position: "bottom-center",
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
      <div className="flex gap-x-2 items-center px-5 my-5">
        {filterVarianProduct[0]?.warna !== undefined &&
          filterVarianProduct[0]?.size && (
            <>
              <div className="w-14 h-14">
                <img src={image} alt="img-product" />
              </div>
              <div className="flex gap-x-1">
                <span>{selectWarnaVarianProduct},</span>
                <span>{selectUkuranVarianProduct}</span>
              </div>
            </>
          )}
      </div>

      <div className="flex items-center mt-4 ps-4 gap-x-4">
        <div className="flex justify-center items-center border border-gray-300 rounded-lg px-1 py-1 gap-x-2">
          <button
            className="text-green-600 text-lg hover:bg-gray-100 px-2"
            onClick={handleDecrement}>
            <FaMinus />
          </button>
          <span>{quantity}</span>
          <button
            className="text-green-600 text-lg hover:bg-gray-100 px-2"
            onClick={handleIncrement}>
            <FaPlus />
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
          <BiMessageDetail className="text-xl" />
          <span className="font-bold text-xs">Chat</span>
        </div>
        <span>|</span>
        <div className="flex items-center gap-x-2 hover:cursor-pointer">
          <span>
            {wishListHeartBoolean[indexHeartBoolean]?.boolean ? (
              <FaHeart
                className={`${
                  wishListHeartBoolean[indexHeartBoolean]?.boolean &&
                  `text-pink-500 ${isAnimation && `animate-heart`}
             `
                } `}
                onClick={handleClickAddToWishList}
                onAnimationEnd={() => setIsAnimation(false)}
              />
            ) : (
              <FaRegHeart onClick={handleClickAddToWishList} />
            )}
          </span>
          <span className="font-bold text-xs">WishList</span>
        </div>

        <span>|</span>
        <div className="flex items-center gap-x-2 hover:cursor-pointer">
          <GrShareOption />
          <span className="font-bold text-xs">Share</span>
        </div>
      </div>
    </div>
  )
}

export default CardBuyProduct
