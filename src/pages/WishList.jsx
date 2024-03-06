import { faChartBar } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext, useState, useEffect } from "react"
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

const WishList = () => {
  const { wishListProduct, wishListHeartBoolean, checkBoxWishListBoolean } =
    useSelector((state) => state.wishList)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const [itemSelected, setItemSelected] = useState(0)
  const { aturWishList, setAturWishList } = useContext(MyContext)
  const [showModal, setShowModal] = useState(false)

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

  useEffect(() => {
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
        <div className="w-full h-[100vh] lg:max-w-6xl flex flex-col items-center justify-center  lg:grid lg:grid-cols-[repeat(2,1fr)] lg:mx-auto lg:items-center  gap-y-3 px-4">
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
          <div className="w-full lg:max-w-6xl lg:mx-auto px-5 flex justify-between  mt-28 lg:mt-36">
            <div className="block lg:flex gap-x-2">
              <p>
                <span className="font-bold">{wishListProduct.length} </span>
                Barang
              </p>
              <p
                className="font-bold text-green-600 hover:cursor-pointer"
                onClick={() => setAturWishList(!aturWishList)}>
                Atur
              </p>
            </div>

            {!aturWishList && (
              <div className="flex gap-x-2 items-center">
                {/* ONLY ON MOBILE */}
                <p
                  className="font-bold text-green-600 lg:hidden"
                  onClick={() => setAturWishList(!aturWishList)}>
                  Atur
                </p>
                <span className="lg:hidden">|</span>
                <FontAwesomeIcon icon={faChartBar} className="lg:hidden" />
                {/* ONLY ON DESKTOP */}
                <span className="hidden lg:block font-bold">Urutkan</span>
                <select
                  name="urutkanWishlist"
                  defaultValue="terbaru-tersimpan"
                  className="hidden lg:block border border-gray-400 rounded-md py-2 px-5 gap-y-6">
                  <option value="terbaru-tersimpan">Terbaru Tersimpan</option>
                  <option value="terlama-tersimpan">Terlama Tersimpan</option>
                  <option value="harga-tertinggi">Harga Tertinggi</option>
                  <option value="harga-terendah">Harga Terendah</option>
                </select>
              </div>
            )}
          </div>
          <div
            className={
              pathname === "/wishlist" &&
              "w-full lg:max-w-6xl mb-24 m-[30px_auto] px-4 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] lg:flex gap-3 "
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
          />
        </>
      )}
    </>
  )
}

export default WishList
