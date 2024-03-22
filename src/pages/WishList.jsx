import React, { useContext, useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
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
import { LuLayoutGrid } from "react-icons/lu"

import useClickOutside from "../hooks/useClickOutside"
import { FaAngleDown } from "react-icons/fa6"

const WishList = () => {
  const { wishListProduct, checkBoxWishListBoolean } = useSelector(
    (state) => state.wishList
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [itemSelected, setItemSelected] = useState(0)
  const [selectOptionUrutkan, setSelectOptionUrutkan] = useState(false)
  const { isShowModal, setIsShowModal, aturWishList, setAturWishList } =
    useContext(MyContext)
  const [valueSelect, setValueSelect] = useState("")
  const [isClickSelect, setIsClickSelect] = useState(false)
  const modalRef = useRef(null)
  const btnConfirmDeleteRef = useRef(null)
  const btnHapusRef = useRef(null)
  const selectRef = useRef(null)

  const handleDelete = () => {
    dispatch(removeItemsFromWishList())
    setIsShowModal(!isShowModal)
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
    setIsShowModal(false)
  }

  useClickOutside(
    modalRef,
    screen.width > 1200 ? btnHapusRef : btnConfirmDeleteRef,
    handleClickOutsideModal
  )

  const handleChangeSelect = (e) => {
    setValueSelect(e.target.value)
  }

  const handleClickOutsideSelect = (e) => {
    if (selectRef.current && !selectRef?.current.contains(e.target)) {
      setIsClickSelect(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    document.addEventListener("click", handleClickOutsideSelect)

    return () => {
      setAturWishList(false)
      dispatch(resetCheckBooleanFalse())
      document.removeEventListener("click", handleClickOutsideSelect)
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
        <div
          className={`w-full min-h-screen bg-white lg:max-w-6xl flex flex-col items-center justify-center  lg:grid lg:grid-cols-[repeat(2,1fr)] lg:mx-auto lg:items-center  gap-y-3 px-4`}>
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
        <div
          className={`w-full min-h-screen relative bg-white overflow-hidden`}>
          <div className=" px-4 lg:max-w-6xl lg:mx-auto items-center flex justify-between pt-28 lg:pt-40">
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
                  handleClick={() => setIsShowModal(true)}
                  disableBtn={itemSelected === 0}
                  ref={btnHapusRef}
                />
                <span
                  className="text-green-600 font-bold hover:cursor-pointer"
                  onClick={handleBatalWishlist}>
                  Batal
                </span>
              </div>
            ) : (
              <div className="flex lg:flex gap-x-2 ">
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
              <LuLayoutGrid className="lg:hidden" />

              {/*SELECT OPTION ONLY ON DESKTOP */}
              <span className="hidden lg:block font-bold">Urutkan</span>
              <div
                className={`hidden lg:flex relative w-52 h-10 border border-gray-400 items-center py-2  rounded-md   ${
                  isClickSelect && `border focus-within:border-green-500`
                }  duration-300`}
                onClick={() => setIsClickSelect(!isClickSelect)}
                ref={selectRef}>
                <select
                  name="urutkan-product"
                  className="w-full absolute top-1 left-0 right-0 bottom-1 px-4 appearance-none  bg-transparent hover:cursor-pointer focus:outline-none z-30"
                  value={valueSelect}
                  onChange={handleChangeSelect}>
                  <option defaultValue="Terbaru Disimpan">
                    Terbaru Disimpan
                  </option>
                  <option value="Terlama Disimpan">Terlama Disimpan</option>
                  <option value="Harga Tertinggi">Harga Tertinggi</option>
                  <option value="Harga Terendah">Harga Terendah</option>
                </select>
                <FaAngleDown
                  className={`absolute top-3 right-4 duration-300 hover:cursor-pointer ${
                    isClickSelect && `rotate-180`
                  }`}
                  onClick={() => setIsClickSelect(!isClickSelect)}
                />
              </div>
              {/*END SELECT OPTION ONLY ON DESKTOP */}
            </div>
          </div>
          <div className="px-4 mt-7 lg:mt-5 pb-20 lg:pb-10  grid lg:max-w-6xl lg:mx-auto grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 lg:grid-cols-[repeat(6,1fr)] ">
            {valueSelect === "Terlama Disimpan"
              ? wishListProduct.map(
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
                )
              : valueSelect === "Harga Tertinggi"
              ? wishListProduct
                  .slice()
                  .sort((a, b) => b.price - a.price)
                  .map(({ id, category, title, image, price, rating }) => {
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
                  })
              : valueSelect === "Harga Terendah"
              ? wishListProduct
                  .slice()
                  .sort((a, b) => a.price - b.price)
                  .map(({ id, category, title, image, price, rating }) => {
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
                  })
              : wishListProduct
                  .slice()
                  .reverse()
                  .map(({ id, category, title, image, price, rating }) => {
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
                  })}

            {/* {wishListProduct.map(
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
            )} */}
          </div>
          <Modal
            handleDelete={handleDelete}
            modalTitle={`Hapus ${itemSelected} Barang`}
            modalParagraph={
              "Product yang kamu pilih akan di hapus dari Keranjang "
            }
            isShowModal={isShowModal}
            setIsShowModal={setIsShowModal}
            ref={modalRef}
          />
          <ConfirmDeleteProductsOnWishList
            isShowModal={isShowModal}
            setIsShowModal={setIsShowModal}
            itemSelected={itemSelected}
            ref={btnConfirmDeleteRef}
          />
        </div>
      )}
    </>
  )
}

export default WishList
