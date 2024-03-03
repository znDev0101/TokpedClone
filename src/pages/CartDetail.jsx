import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { useFetch } from "../hooks/useFetch"
import {
  deleteCartProduct,
  falseAllBooleanChecked,
  trueAllBooleanChecked,
} from "../redux/cartSlice/cartSlice"
import { resetTotalPrice } from "../redux/cartSlice/cartSlice"
import "react-toastify/dist/ReactToastify.css"
import { toast, Bounce } from "react-toastify"
import CartProducts from "../components/cartproducts/CartProducts"
import Modal from "../components/modal/Modal"
import SumPrice from "../components/sumprice/SumPrice"
import RingkasanBelanja from "../components/ringkasanbelanja/RingkasanBelanja"
import { useCheckedProduct } from "../hooks/useCheckedProduct"

const CartDetail = () => {
  const [showModal, setShowModal] = useState(false)
  const [isShowDeleteBtn, setIsShowDeleteBtn] = useState(false)
  const dispatch = useDispatch()

  const { isChecked, setIsChecked } = useCheckedProduct()

  const navigate = useNavigate()

  const { cartProduct, selectedProduct, cartBoolean } = useSelector(
    (state) => state.cart
  )
  const { data, loading } = useFetch("https://fakestoreapi.com/products/")

  useEffect(() => {
    return () => {
      dispatch(resetTotalPrice())
    }
  }, [])

  useEffect(() => {
    if (selectedProduct.length !== 0) {
      setIsShowDeleteBtn(true)
    } else {
      setIsShowDeleteBtn(false)
    }
  }, [selectedProduct, cartBoolean])

  const handleDelete = () => {
    dispatch(deleteCartProduct())
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
  }

  const handleChange = () => {
    setIsChecked(!isChecked)
    if (isChecked) {
      dispatch(falseAllBooleanChecked())
    } else {
      dispatch(trueAllBooleanChecked())
    }
  }

  return (
    <div
      className={
        cartProduct.length < 4
          ? "w-full h-[100dvh]  lg:bg-[#f0f3f7]  pt-10 pb-16 z-40"
          : "w-full h-full  lg:bg-[#f0f3f7] pt-10 pb-16 z-40 "
      }>
      <div className="lg:max-w-6xl lg:mx-auto">
        <h1 className="hidden lg:block font-bold lg:mt-28 lg:mb-8 lg:text-2xl">
          Keranjang
        </h1>
        <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-x-5">
          {cartProduct.length === 0 ? (
            <>
              <div className="flex flex-col px-5 gap-y-5 mt-12">
                <div className="flex gap-x-5">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="4x"
                    className="text-green-600"
                  />
                  <div className="flex flex-col gap-y-1">
                    <h5 className="font-bold text-lg">
                      Wah, Keranjang belanjamu kosong
                    </h5>
                    <p className="text-sm">
                      Yuk, isi dengan barang-barang impianmu!
                    </p>
                  </div>
                </div>
                <button
                  className="w-full bg-green-600 font-bold text-white py-1 rounded-md"
                  onClick={() => navigate("/")}>
                  Mulai belanja
                </button>
              </div>
              <div className="hidden lg:w-full lg:px-3">
                <h1>Ringkasan Belanja</h1>
              </div>
            </>
          ) : (
            <div className="container">
              {/* ONLY ON MOBILE */}
              <div
                className={
                  isShowDeleteBtn
                    ? " translate-y-full grid grid-cols-[repeat(2,1fr)] duration-300 px-5 lg:hidden"
                    : " -translate-y-28 grid grid-cols-[repeat(2,1fr)] duration-300 px-5 lg:hidden"
                }>
                <span>{selectedProduct.length} product terpilih</span>
                <button
                  className="text-end font-bold text-green-600"
                  onClick={() => setShowModal(!showModal)}>
                  Hapus
                </button>
              </div>
              {/* ONLY ON DESKTOP */}
              <div className="hidden lg:mb-2 lg:py-5 lg:px-5 lg:flex lg:justify-between lg:container lg:bg-white lg:rounded-md">
                <div className="flex gap-x-2 items-center">
                  <div className="w-5 h-5 border">
                    <input
                      type="checkbox"
                      className="w-full h-full"
                      onChange={handleChange}
                      checked={isChecked}
                    />
                  </div>
                  <span className="font-bold">Pilih Semua</span>
                </div>
                <span className="font-bold text-green-600">Hapus</span>
              </div>
              {cartProduct.map((dataCartProduct) => {
                return data
                  .filter(({ id }) => id == dataCartProduct.id)
                  .map(
                    ({
                      id,
                      title,
                      image,
                      price,
                      category,
                      description,
                      rating,
                    }) => {
                      return (
                        <div
                          className="w-full mt-2 lg:col-[1/2] lg:bg-white lg:rounded-md"
                          key={id}>
                          <CartProducts
                            id={id}
                            price={price}
                            category={category}
                            dataCart={cartProduct}
                            dataCartProduct={dataCartProduct}
                            title={title}
                            image={image}
                            description={description}
                            rating={rating}
                          />
                        </div>
                      )
                    }
                  )
              })}
              <Modal
                showModal={showModal}
                modalTitle={"Hapus Barang"}
                modalParagraph={
                  "Product yang kamu pilih akan di hapus dari Keranjang "
                }
                setShowModal={setShowModal}
                handleDelete={handleDelete}
              />
              <SumPrice />
            </div>
          )}
          <RingkasanBelanja />
        </div>
      </div>
    </div>
  )
}

export default CartDetail
