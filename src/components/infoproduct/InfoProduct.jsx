import React from "react"
import bebasOngkir from "../../assets/images/bebas_ongkir.png"

// third party library

import DescriptionInfoProduct from "../descriptioninfoproduct/DescriptionInfoProduct"
import { FaHeart, FaRegHeart } from "react-icons/fa6"
import { useLocation } from "react-router"

const InfoProduct = ({
  wishListHeartBoolean,
  indexHeartBoolean,
  indexActiveSelecWarnaProduct,
  setIndexActiveSelectWarnaProduct,
  indexActiveSelectUkuranProduct,
  setIndexActiveSelectUkuranProduct,
  selectUkuranVarianProduct,
  setSelectUkuranVarianProduct,
  handleClickAddToWishList,
  selectWarnaVarianProduct,
  setSelectWarnaVarianProduct,
  isAnimation,
  setIsAnimation,
  filterVarianProduct,
  ...data
}) => {
  const { idProduct, title, price, rating, description, category } = data

  const { pathname } = useLocation()

  const handleClickSelectWarnaProduct = (data, index) => {
    setSelectWarnaVarianProduct(data)
    setIndexActiveSelectWarnaProduct(index)
  }

  const handleClickSelectUkuranProduct = (data, index) => {
    setSelectUkuranVarianProduct(data)
    setIndexActiveSelectUkuranProduct(index)
  }

  return (
    <div className="w-full lg:max-w-lg flex flex-col gap-y-3 lg:mt-5">
      <div className="flex flex-col">
        <h5 className="text-base lg:font-bold lg:text-2xl">{title}</h5>
        {category !== "electronics" && pathname !== "/product_detail/1" && (
          <div className="flex gap-x-2 lg:hidden">
            <span>- {selectWarnaVarianProduct},</span>
            <span>{selectUkuranVarianProduct}</span>
          </div>
        )}
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-x-2">
            <span className="font-bold text-2xl lg:text-4xl">${price}</span>
            <div className="w-20">
              <img
                src={bebasOngkir}
                alt="img"
                className="w-full object-cover"
              />
            </div>
          </div>
          <span className="block lg:hidden">
            {wishListHeartBoolean[indexHeartBoolean]?.boolean ? (
              <FaHeart
                className={`${
                  wishListHeartBoolean[indexHeartBoolean]?.boolean &&
                  `text-pink-500 ${isAnimation && `animate-heart`}`
                }`}
                onAnimationEnd={() => setIsAnimation(false)}
                onClick={handleClickAddToWishList}
              />
            ) : (
              <FaRegHeart onClick={handleClickAddToWishList} />
            )}
          </span>
        </div>
        <div
          className={`hidden  lg:flex flex-col ${
            filterVarianProduct[0]?.warna !== undefined &&
            filterVarianProduct[0]?.size !== undefined &&
            `mt-6`
          }   gap-y-2`}>
          {filterVarianProduct[0]?.warna !== undefined && (
            <div className="flex gap-x-3">
              <span className="font-bold">Pilih Warna: </span>
              <span className="text-gray-600">{selectWarnaVarianProduct}</span>
            </div>
          )}
          <div className="flex gap-x-3  ">
            {filterVarianProduct[0]?.warna !== undefined && (
              <>
                {filterVarianProduct[0]?.warna.map((data, index) => {
                  return (
                    <button
                      key={index}
                      className={`hidden lg:block border border-gray-300 py-1 px-2 rounded-md ${
                        index === indexActiveSelecWarnaProduct &&
                        `border-green-500 duration-300`
                      }`}
                      onClick={() =>
                        handleClickSelectWarnaProduct(data, index)
                      }>
                      {data}
                    </button>
                  )
                })}
              </>
            )}
          </div>
        </div>
        <div className="hidden  lg:flex flex-col mt-6 gap-y-2">
          {filterVarianProduct[0]?.size !== undefined && (
            <>
              <div className="flex gap-x-3">
                <span className="font-bold">Pilih Ukuran: </span>
                <span className="text-gray-600">
                  {selectUkuranVarianProduct}
                </span>
              </div>
            </>
          )}
          <div className="flex gap-x-3  ">
            {filterVarianProduct[0]?.size !== undefined && (
              <>
                {filterVarianProduct[0]?.size.map((data, index) => {
                  return (
                    <button
                      key={index}
                      className={`hidden lg:block border border-gray-300 py-1 px-2 rounded-md ${
                        index === indexActiveSelectUkuranProduct &&
                        `border-green-500 duration-300`
                      }`}
                      onClick={() =>
                        handleClickSelectUkuranProduct(data, index)
                      }>
                      {data}
                    </button>
                  )
                })}
              </>
            )}
          </div>
        </div>
        {/* only mobile */}
        {screen.width <= 428 && (
          <div className="flex flex-col mt-4 lg:mt-7 gap-y-5">
            <div className="">
              <h1 className="font-bold">Detail Produk</h1>
              <div className="flex items-center gap-x-16 mt-2">
                {category === "men's clothing" ||
                category === "women's clothing" ? (
                  <>
                    <ul>
                      <li>Kondisi</li>
                      <li>Bahan</li>
                      <li>Ukuran</li>
                      <li>Acara</li>
                      <li>Etalase</li>
                    </ul>
                    <ul>
                      <li>: Baru</li>
                      <li>: Katun</li>
                      <li>: L</li>
                      <li>: Formal</li>
                      <li>: Baju</li>
                    </ul>
                  </>
                ) : (
                  <ul></ul>
                )}
              </div>
            </div>
          </div>
        )}
        {/* ONLY DESKTOP */}
        <DescriptionInfoProduct
          id={idProduct}
          category={category}
          description={description}
        />
        {/* ONLY ON MOBILE */}
        <div className="flex flex-col mt-4 gap-y-2 lg:hidden">
          <h1 className="font-bold">Deskripsi produk</h1>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoProduct
