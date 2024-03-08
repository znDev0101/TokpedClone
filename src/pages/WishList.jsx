import { faChartBar } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext, useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router"
import Button from "../components/button/Button"
import wishlist from "../assets/images/wishlist.png"
import CardProducts from "../components/cardproducts/CardProducts"
import ConfirmDeleteProductsOnWishList from "../components/confirmdeleteproductsonwishlist/ConfirmDeleteProductsOnWishList"
import Modal from "../components/modal/Modal"
import {
  removeItemsFromWishList,
  resetCheckBooleanFalse,
} from "../redux/wishlistSlice/wishListSlice"
import { MyContext } from "../context/MyContext"
import { toast, Bounce } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import useClickOutside from "../hooks/useClickOutside"

const WishList = () => {
  const { wishListProduct, checkBoxWishListBoolean } = useSelector(
    (state) => state.wishList
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const [itemSelected, setItemSelected] = useState(0)
  const [selectOptionUrutkan, setSelectOptionUrutkan] = useState(false)
  const { aturWishList, setAturWishList } = useContext(MyContext)
  const [showModal, setShowModal] = useState(false)
  const btnHapusRef = useRef(null)
  const modalRef = useRef(null)

  const handleDelete = () => {
    dispatch(removeItemsFromWishList())
    setShowModal(!showModal)
    toast.success("Belanjaan kamu berhasil di hapus", {
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
    setAturWishList(!aturWishList)
  }

  const handleClickSelectOption = (event) => {
    window.addEventListener("click", (e) => {
      if (e.target == event.target) {
        setSelectOptionUrutkan(!selectOptionUrutkan)
      } else {
        setSelectOptionUrutkan(false)
      }
    })
  }

  const handleBatalWishlist = () => {
    setAturWishList(!aturWishList)
    dispatch(resetCheckBooleanFalse())
  }

  const handleClickOutsideModal = () => {
    setShowModal(false)
  }

  useClickOutside(modalRef, handleClickOutsideModal, btnHapusRef)

  useEffect(() => {
    window.scrollTo(0, 0)

    return () => {
      setAturWishList(false)
      dispatch(resetCheckBooleanFalse())
    }
  }, [])

  useEffect(() => {
    const checkBoxWishListBooleanTrue = checkBoxWishListBoolean.filter(
      ({ boolean }) => boolean === true
    )
    setItemSelected(checkBoxWishListBooleanTrue.length)
  }, [checkBoxWishListBoolean])

  return (
    <>
      {wishListProduct.length === 0 ? (
        <div className="w-full h-[100dvh] lg:max-w-6xl flex flex-col items-center justify-center  lg:grid lg:grid-cols-[repeat(2,1fr)] lg:mx-auto lg:items-center  gap-y-3 px-4">
          <div className="w-72 h-56 lg:w-96 lg:h-64 lg:col-[2] lg:justify-self-end ">
            <img
              src={wishlist}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-center lg:text-start gap-y-2 lg:row-[1] lg:gap-y-4">
            <h2 className="font-bold text-2xl ">Wishlist</h2>
            <p>
              Simpan barang-barang yang kamu suka buat dibeli nanti. Yuk, mulai
              isi Wishlist kamu!
            </p>
            <Button
              styleButton={
                "bg-green-600 lg:w-[60%] font-bold text-white py-2 rounded-lg "
              }
              textButton={"Cari Barang Impian"}
              handleClick={() => navigate("/")}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="w-full lg:max-w-6xl lg:mx-auto px-5 flex justify-between   mt-28 lg:mt-40">
            {aturWishList && screen.width > 1200 ? (
              <div className="flex items-center gap-x-4">
                <Button
                  textButton={
                    itemSelected !== 0 ? `Hapus (${itemSelected})` : `Hapus`
                  }
                  styleButton={`w-44 border border-gray-300  py-1 text-sm text-gray-500 font-bold rounded-md  ${
                    itemSelected !== 0 &&
                    `text-green-600 border border-green-600`
                  } ${
                    itemSelected === 0
                      ? `hover:cursor-not-allowed`
                      : `hover:cursor-pointer`
                  } `}
                  handleClick={() => setShowModal(!showModal)}
                  ref={btnHapusRef}
                  disableBtn={itemSelected === 0}
                />
                <span
                  className="text-green-600 font-bold hover:cursor-pointer"
                  onClick={handleBatalWishlist}>
                  Batal
                </span>
              </div>
            ) : (
              <div className="block lg:flex gap-x-2">
                <p>
                  <span className="font-bold">{wishListProduct.length} </span>
                  Barang
                </p>
                <p
                  className="font-bold text-green-600 hover:cursor-pointer hidden lg:block"
                  onClick={() => {
                    setAturWishList(!aturWishList)
                  }}>
                  Atur
                </p>
              </div>
            )}

            <div className="flex gap-x-2 items-center">
              {/* ONLY ON MOBILE */}
              <p
                className={`font-bold text-green-600 lg:hidden ${
                  aturWishList ? `hidden` : `block`
                }`}
                onClick={() => setAturWishList(!aturWishList)}>
                Atur
              </p>
              <span
                className={`lg:hidden ${aturWishList ? `hidden` : `block`}`}>
                |
              </span>
              <FontAwesomeIcon
                icon={faChartBar}
                className={`lg:hidden ${aturWishList ? `hidden` : `block`}`}
              />
              {/* ONLY ON DESKTOP */}
              <span className="hidden lg:block font-bold">Urutkan</span>

              <div
                className="hidden lg:inline-block relative hover:cursor-pointer"
                onClick={handleClickSelectOption}>
                <div className="hidden lg:flex items-center  border px-3 py-1 gap-x-5 border-gray-400 rounded-md">
                  <span>Terbaru Disimpan</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`duration-300 ${
                      selectOptionUrutkan ? `rotate-180` : `rotate-0`
                    }`}
                  />
                </div>
                <div
                  className={`absolute duration-300  h-36 left-0 right-0 top-9 overflow-y-scroll border border-gray-300 rounded-md ${
                    selectOptionUrutkan ? `opacity-100` : `opacity-0 hidden`
                  } `}>
                  <div className="flex flex-col gap-y-1    mt-2">
                    <span className="duration-300 px-3 py-1 hover:bg-gray-300">
                      Terbaru Disimpan
                    </span>
                    <span className="duration-300 px-3 py-1 hover:bg-gray-300">
                      Terlama Disimpan
                    </span>
                    <span className="duration-300 px-3 py-1 hover:bg-gray-300">
                      Harga Tertinggi
                    </span>
                    <span className="duration-300 px-3 py-1 hover:bg-gray-300">
                      Harga Terendah
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              pathname === "/wishlist" &&
              "w-full lg:max-w-6xl mb-24 m-[30px_auto] px-4 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] lg:grid-cols-6 gap-3 "
            }>
            {wishListProduct.map(
              ({ id, category, title, image, price, rating }) => {
                return (
                  <CardProducts
                    key={id}
                    id={id}
                    category={category}
                    title={title}
                    image={image}
                    price={price}
                    rating={rating}
                    urlPath={"/product_detail"}
                  />
                )
              }
            )}
          </div>
          {aturWishList && (
            <ConfirmDeleteProductsOnWishList
              showModal={showModal}
              setShowModal={setShowModal}
              btnHapusRef={btnHapusRef}
              itemSelected={itemSelected}
            />
          )}
          <Modal
            handleDelete={handleDelete}
            modalTitle={`Hapus ${itemSelected} Barang`}
            modalParagraph={
              "Product yang kamu pilih akan di hapus dari Keranjang "
            }
            showModal={showModal}
            setShowModal={setShowModal}
            modalRef={modalRef}
          />
        </>
      )}
    </>
  )
}

export default WishList
