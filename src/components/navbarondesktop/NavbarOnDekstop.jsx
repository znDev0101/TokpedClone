import React, { useState, useRef, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {
  faCartShopping,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import Keranjang from "../../assets/images/Keranjang.svg"
import LogoTokped from "../../assets/images/LogoTokped.svg"
import wishlist from "../../assets/images/wishlist.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"
import { faBell, faHeart } from "@fortawesome/free-regular-svg-icons"

const NavbarOnDekstop = () => {
  const [isOpenCartMenu, setIsOpenCartMenu] = useState(false)
  const [isOpenHeartMenuDropdown, setIsOpenHeartMenuDropdown] = useState(false)
  const { cartProduct, totalCart } = useSelector((state) => state.cart)
  const { wishListProduct } = useSelector((state) => state.wishList)
  const cartRef = useRef()
  const menuCartRef = useRef()
  const wishlistRef = useRef()

  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <header
      className={`w-full fixed top-0 z-50 ${
        pathname === "/cart_detail" && `shadow-md`
      }`}>
      {/* nav one */}
      <nav className="flex justify-between px-8 py-1 bg-gray-200">
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faPhone} />
          <span className="text-sm">Download Tokopedia App</span>
        </div>
        <ul className="flex gap-x-9">
          <li>
            <Link className="text-sm">Tentang Tokopedia</Link>
          </li>
          <li>
            <Link className="text-sm">Mitra Tokopedia</Link>
          </li>
          <li>
            <Link className="text-sm">Mulai Berjualan</Link>
          </li>
          <li>
            <Link className="text-sm">Promo</Link>
          </li>
          <li>
            <Link className="text-sm">Tokopedia Care</Link>
          </li>
        </ul>
      </nav>
      <nav className="grid grid-cols-[1fr_5fr_2.5fr] grid-rows-[repeat(2,max-content)] gap-x-10 items-center px-8 py-3  bg-white border-b border-gray-200">
        <Link to="/">
          <img
            src={LogoTokped}
            alt="img-tokopedia"
            className="object-contain"
          />
        </Link>
        <div className="w-full flex gap-x-4 items-center ">
          <span>Kategori</span>
          <div className="w-full h-10 flex items-center border gap-x-3 border-gray-200 rounded-md">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className=" text-gray-400 ms-3"
              size="lg"
            />
            <div className="flex flex-col">
              <input
                type="text"
                className="w-[90%] h-full placeholder:text-gray-500 focus:outline-none"
                placeholder="Cari di Tokopedia"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(3,1fr)] gap-x-10 items-center ">
          <div className="flex items-center justify-center gap-x-2">
            <div
              className="relative flex flex-col justify-center items-center  p-2 duration-300 hover:bg-gray-100 rounded-md hover:cursor-pointer "
              onMouseEnter={() => setIsOpenCartMenu(true)}
              onMouseLeave={() => setIsOpenCartMenu(false)}
              ref={cartRef}>
              <FontAwesomeIcon
                size="lg"
                icon={faCartShopping}
                onClick={() => navigate("/cart_detail")}
              />
              <span className="absolute w-max h-max top-0 -right-1 text-center rounded-full text-xs bg-green-600 text-white font-bold px-[.4rem]">
                {totalCart !== 0 && totalCart}
              </span>
              {isOpenCartMenu && (
                <div
                  className="w-96 h-max mx-auto pt-2 pb-5 absolute top-[2.4rem] border border-gray-300   bg-white rounded-md shadow-md"
                  ref={menuCartRef}>
                  <div className="flex justify-between px-2">
                    {cartProduct.length === 0 ? (
                      <h5 className="font-bold">Keranjang</h5>
                    ) : (
                      <h5 className="font-bold text-center">
                        Keranjang{" "}
                        <span className="text-gray-400">{`(${totalCart})`}</span>
                      </h5>
                    )}

                    <Link
                      className="font-bold text-green-600"
                      to="/cart_detail">
                      Lihat
                    </Link>
                  </div>

                  {cartProduct.length === 0 ? (
                    <div className="max-w-xs mx-auto flex flex-col gap-y-2 ">
                      <div className="w-32 h-32  mx-auto">
                        <img
                          src={Keranjang}
                          alt="img-keranjang"
                          className="w-full h-full"
                        />
                      </div>
                      <h1 className="font-bold text-lg">
                        Wah, Keranjang Belanjaanmu Kosong
                      </h1>
                      <p className="text-gray-700 text-base">
                        Yuk, isi dengan barang barang impian mu
                      </p>
                      <Link className="py-2 bg-white border border-green-600 text-sm text-center text-green-600 font-bold rounded-md mx-5">
                        Mulai Belanja
                      </Link>
                    </div>
                  ) : (
                    <div
                      className={`flex flex-col gap-y-7 mt-2 ${
                        cartProduct.length >= 5
                          ? "h-72 overflow-y-scroll py-2"
                          : "h-max py-2"
                      } `}>
                      {cartProduct.map(
                        ({
                          id,
                          imageProduct,
                          title,
                          quantity,
                          priceProduct,
                        }) => {
                          return (
                            <div
                              className="flex justify-between items-start px-2"
                              key={id}>
                              <div className="flex gap-x-4">
                                <div className="w-10 h-10">
                                  <img
                                    src={imageProduct}
                                    alt="img-product"
                                    className="object-cover"
                                  />
                                </div>
                                <h5>
                                  {title?.length >= 20
                                    ? `${title.slice(0, 20)}...`
                                    : `${title}`}
                                </h5>
                              </div>
                              <span className="font-bold">
                                {quantity} X ${priceProduct}
                              </span>
                            </div>
                          )
                        }
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="relative p-2">
              <FontAwesomeIcon size="lg" icon={faBell} />
            </div>
            <div
              className="relative flex justify-center m-[unset] p-2 duration-300 hover:bg-gray-100 rounded-md hover:cursor-pointer "
              onMouseEnter={() =>
                setIsOpenHeartMenuDropdown(!isOpenHeartMenuDropdown)
              }
              onMouseLeave={() =>
                setIsOpenHeartMenuDropdown(!isOpenHeartMenuDropdown)
              }
              ref={wishlistRef}>
              <FontAwesomeIcon
                size="lg"
                icon={faHeart}
                onClick={() => navigate("/wishlist")}
              />
              <span className="absolute w-max h-max top-0 -right-1 text-center rounded-full text-xs bg-green-600 text-white font-bold px-[.4rem]">
                {wishListProduct.length !== 0 && wishListProduct.length}
              </span>
              {isOpenHeartMenuDropdown && (
                <div className="w-96 h-max mx-auto pt-2 pb-5 absolute top-[2.4rem] border border-gray-300   bg-white rounded-md shadow-md">
                  <div className="flex justify-between px-2">
                    {wishListProduct.length === 0 ? (
                      <h5 className="font-bold">WishList</h5>
                    ) : (
                      <h5 className="font-bold text-center">
                        WishList{" "}
                        <span className="text-gray-400">{`(${wishListProduct.length})`}</span>
                      </h5>
                    )}
                    <Link className="font-bold text-green-600" to="/wishlist">
                      Lihat
                    </Link>
                  </div>

                  {wishListProduct.length === 0 ? (
                    <div className="max-w-xs mx-auto flex flex-col gap-y-3 ">
                      <div className="w-40 h-40 mx-auto">
                        <img
                          src={wishlist}
                          alt="img-wishlist"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <p className="text-gray-700 text-base">
                        Simpan barang-barang yang kamu suka buat dibeli nanti.
                        Yuk, mulai isi Wishlist kamu!
                      </p>
                      <Link className="py-2 bg-white border border-green-600 text-sm text-center text-green-600 font-bold rounded-md mx-5">
                        Cari Barang
                      </Link>
                    </div>
                  ) : (
                    <div
                      className={`flex flex-col gap-y-7 mt-2 ${
                        wishListProduct.length >= 5
                          ? "h-72 overflow-y-scroll py-2"
                          : "h-max py-2"
                      } `}>
                      {wishListProduct.map(
                        ({ id, image, title, quantity, price }) => {
                          return (
                            <div
                              className="flex justify-between items-start px-2"
                              key={id}>
                              <div className="flex gap-x-4">
                                <div className="w-10 h-10">
                                  <img
                                    src={image}
                                    alt="img-product"
                                    className="object-cover"
                                  />
                                </div>
                                <h5>
                                  {title.length >= 20
                                    ? `${title.slice(0, 20)}...`
                                    : `${title}`}
                                </h5>
                              </div>
                              <span className="font-bold">${price}</span>
                            </div>
                          )
                        }
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <span>|</span>
          <div className="flex items-center gap-x-7">
            <button className="text-green-600 font-bold bg-white border border-green-600 py-1 px-3 rounded-md">
              Masuk
            </button>
            <Link className="text-white font-bold bg-green-600 border border-green-600 py-1 px-3 rounded-md">
              Daftar
            </Link>
          </div>
        </div>
        <ul className="ms-20 mt-2 flex gap-x-5 col-[2/3] row-[2]">
          <li>
            <Link
              to="/products/category/electronics"
              className="text-sm text-gray-600">
              Electronics
            </Link>
          </li>
          <li>
            <Link
              to="/products/category/mens_clothing"
              className="text-sm text-gray-600">
              Men's Clothing
            </Link>
          </li>
          <li>
            <Link
              to="/products/category/womens_clothing"
              className="text-sm text-gray-600">
              Women's Clothing
            </Link>
          </li>
          <li>
            <Link
              to="/products/category/jewelery"
              className="text-sm text-gray-600">
              Jewerlly
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavbarOnDekstop
