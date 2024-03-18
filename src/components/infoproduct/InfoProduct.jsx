import React from "react"
import bebasOngkir from "../../assets/images/bebas_ongkir.png"

// third party library

import { CiHeart } from "react-icons/ci"
import DescriptionInfoProduct from "../descriptioninfoproduct/DescriptionInfoProduct"
import { FaHeart, FaRegHeart } from "react-icons/fa6"

const InfoProduct = ({
  wishListHeartBoolean,
  indexHeartBoolean,
  handleClickAddToWishList,
  isAnimation,
  setIsAnimation,
  ...data
}) => {
  const { idProduct, title, price, rating, description, category } = data

  return (
    <div className="w-full lg:max-w-lg flex flex-col gap-y-3 lg:mt-5">
      <div className="flex flex-col">
        <h5>{title}</h5>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-x-2">
            <span className="font-bold text-xl">${price}</span>
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
