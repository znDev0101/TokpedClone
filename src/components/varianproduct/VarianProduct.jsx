import React, { useEffect, useRef, useState } from "react"
import NavbarOnProductDetail from "../navbaronproductdetail/NavbarOnProductDetail"
import "react-toastify/dist/ReactToastify.css"
import { useSelector } from "react-redux"
import { useLocation, useOutletContext } from "react-router"
import { FaXmark } from "react-icons/fa6"

const VarianProduct = ({
  isOpenVarianProduct,
  setIsOpenVarianProduct,
  indexActiveSelecWarnaProduct,
  setIndexActiveSelectWarnaProduct,
  indexActiveSelectUkuranProduct,
  setIndexActiveSelectUkuranProduct,
  selectUkuranVarianProduct,
  setSelectUkuranVarianProduct,
  selectWarnaVarianProduct,
  setSelectWarnaVarianProduct,
  filterVarianProduct,
  handleClick,
  navOnProductDetailRef,
  ...data
}) => {
  const { productId, imageProduct, price, stock: stockProduct } = data
  const { cartProduct } = useSelector((state) => state.cart)
  const [indexCart, setIndexCart] = useState([])

  const { pathname } = useLocation()

  const varianProductRef = useRef(null)

  const { isOpenMainMenu } = useOutletContext()

  useEffect(() => {
    if (cartProduct.length !== 0) {
      const findIndexCart = cartProduct.findIndex(({ id }) => id == productId)
      setIndexCart(findIndexCart)
    }
  }, [cartProduct, productId])

  const outsideClick = (e) => {
    if (!navOnProductDetailRef?.current.contains(e.target)) {
      if (
        varianProductRef.current &&
        !varianProductRef?.current.contains(e.target)
      ) {
        setIsOpenVarianProduct(false)
      }
    }
  }

  const handleClickSelectWarnaProduct = (data, index) => {
    setIndexActiveSelectWarnaProduct(index)
    setSelectWarnaVarianProduct(data)
  }

  const handleClickSelectUkuranProduct = (data, index) => {
    setIndexActiveSelectUkuranProduct(index)
    setSelectUkuranVarianProduct(data)
  }

  useEffect(() => {
    document.addEventListener("click", outsideClick)

    return () => {
      document.removeEventListener("click", outsideClick)
    }
  }, [])

  return (
    <div
      className={`w-full h-[60dvh] fixed bottom-0 lg:hidden flex flex-col gap-y-3   bg-white duration-300   overflow-y-scroll z-50 ${
        isOpenVarianProduct && !isOpenMainMenu
          ? `translate-y-0`
          : `translate-y-full`
      }`}
      ref={varianProductRef}>
      <div className="sticky top-0 flex gap-x-4 pt-3 px-3 py-2 items-center bg-white z-50">
        <FaXmark
          className="text-4xl"
          onClick={() => setIsOpenVarianProduct(!isOpenVarianProduct)}
        />
        <h5 className="font-bold text-2xl">Varian Product</h5>
      </div>
      <div className="w-full px-3 mt-4">
        <div className="flex items-center gap-x-4 ">
          <div className="w-[40%] h-40 border border-gray-600 rounded-md">
            <img
              src={imageProduct}
              alt="img-product"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="py-1">
            <div className="flex gap-x-2">
              <span className="text-xs text-gray-600 font-bold px-2 bg-gray-300 rounded-sm">
                {selectWarnaVarianProduct}
              </span>
              {pathname !== "/product_detail/1" && (
                <span className="text-xs text-gray-600 font-bold px-2 bg-gray-300 rounded-sm">
                  {selectUkuranVarianProduct}
                </span>
              )}
            </div>
            <span className="font-bold text-xl">${price}</span>
            <br />
            <span>
              Stok :
              {cartProduct[indexCart]?.quantity != undefined
                ? cartProduct[indexCart]?.stock
                : stockProduct}
            </span>
          </div>
        </div>
        {filterVarianProduct[0]?.warna != undefined && (
          <div className="flex flex-col gap-y-5 mt-10">
            <h5 className="font-bold text-xl">Warna:</h5>

            <div className={`flex gap-x-4 `}>
              {filterVarianProduct[0]?.warna.map((data, index) => {
                return (
                  <button
                    key={index}
                    className={`border border-gray-400 py-1 px-3 rounded-xl ${
                      index === indexActiveSelecWarnaProduct &&
                      `text-green-500 border-green-500 duration-300`
                    }`}
                    onClick={() => handleClickSelectWarnaProduct(data, index)}>
                    {data}
                  </button>
                )
              })}
            </div>
          </div>
        )}
        {filterVarianProduct[0]?.size != undefined && (
          <div className="flex flex-col gap-y-5 mt-10 mb-6">
            <h5 className="font-bold text-xl">Ukuran:</h5>
            <div className="flex gap-x-2 ">
              {filterVarianProduct[0]?.size.map((data, index) => {
                return (
                  <button
                    key={index}
                    className={`border border-gray-400 py-1 px-3 rounded-xl ${
                      index === indexActiveSelectUkuranProduct &&
                      `text-green-500 border-green-500 duration-300`
                    }`}
                    onClick={() => handleClickSelectUkuranProduct(data, index)}>
                    {data}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
      <NavbarOnProductDetail
        style={`w-full flex items-center px-2 bg-white gap-x-2 z-50 ${
          filterVarianProduct[0]?.size === undefined
            ? `fixed bottom-2`
            : `sticky bottom-2`
        }`}
        handleClick={handleClick}
      />
    </div>
  )
}

export default VarianProduct
