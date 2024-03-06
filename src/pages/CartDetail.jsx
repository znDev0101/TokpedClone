import React, { useState, useEffect } from "react"
import Keranjang from "../assets/images/Keranjang.svg"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useOutletContext } from "react-router"
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
  const [windowScrollY, setWindowScrollY] = useState(0)
  const dispatch = useDispatch()

  const { isChecked, setIsChecked } = useCheckedProduct()

  const { isOpenMainMenu } = useOutletContext()

  const navigate = useNavigate()

  const { cartProduct, selectedProduct, cartBoolean, totalCart, totalPrice } =
    useSelector((state) => state.cart)
  const { data, loading } = useFetch("https://fakestoreapi.com/products/")

  useEffect(() => {
    return () => {
      dispatch(resetTotalPrice())
    }
  }, [])

  useEffect(() => {
    const getScrollY = () => {
      setWindowScrollY(window.scrollY)
      if (window.scrollY >= windowScrollY) {
        setIsShowDeleteBtn(false)
      } else {
        setIsShowDeleteBtn(true)
      }
    }

    window.addEventListener("scroll", getScrollY)
    return () => {
      removeEventListener("scroll", getScrollY)
    }
  }, [windowScrollY])

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
      className={`w-full lg:bg-[#f0f3f7]  pt-10 pb-16 z-40 ${
        cartProduct.length > 2 ? `h-full` : `h-screen`
      } ${showModal && `overflow-auto`} `}>
      <div className="lg:max-w-[75rem] lg:mx-auto">
        <h1 className="hidden lg:block font-bold lg:mt-28 lg:mb-8 lg:text-2xl">
          Keranjang
        </h1>
        <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-x-5">
          {cartProduct.length === 0 ? (
            <>
              <div className="w-full px-3 mt-12 lg:mt-0 lg:p-10 lg:bg-white">
                <div className="lg:max-w-lg lg:m-auto   grid grid-cols-[max-content_1fr] lg:gap-x-4 lg:items-center">
                  <div className="w-36 h-36  lg:w-32 lg:h-32 mt-2">
                    <img
                      src={Keranjang}
                      alt="img-cart"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-[2] lg:row-[1] lg:self-start mt-4 lg:mt-2 flex flex-col gap-y-1">
                    <h5 className="font-bold text-lg lg:text-xl">
                      Wah, Keranjang belanjamu kosong
                    </h5>
                    <p className="text-sm text-gray-600">
                      Yuk, isi dengan barang-barang impianmu!
                    </p>
                  </div>
                  <button
                    className=" col-[1/3] lg:col-[2] row-2 lg:row-[1] w-full lg:w-48 lg:mb-4 bg-green-600 font-bold text-white py-1 lg:py-2 rounded-md lg:self-end "
                    onClick={() => navigate("/")}>
                    Mulai belanja
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="container">
              {/* ONLY ON MOBILE */}
              <div
                className={`bg-white w-full fixed flex justify-between px-4 py-1 duration-300 lg:hidden ${
                  isShowDeleteBtn &&
                  !isOpenMainMenu &&
                  selectedProduct.length !== 0
                    ? `top-14 z-50 `
                    : `top-0 -z-20 `
                }`}>
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
                  <div className="w-5 h-5 ">
                    <input
                      type="checkbox"
                      className="w-full h-full hover:cursor-pointer"
                      onChange={handleChange}
                      checked={isChecked}
                    />
                  </div>
                  <span className="font-bold">
                    Pilih Semua{" "}
                    <span className="text-gray-400">{`(${totalCart})`}</span>{" "}
                  </span>
                </div>
                {selectedProduct.length !== 0 && (
                  <span
                    className="font-bold text-green-600 hover:cursor-pointer"
                    onClick={() => setShowModal(!showModal)}>
                    Hapus
                  </span>
                )}
              </div>
              <div
                className={`w-full duration-300 lg:mt-0 ${
                  isShowDeleteBtn && selectedProduct.length !== 0
                    ? `mt-14`
                    : `my-7 lg:my-0`
                }`}>
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
                            className={`lg:mt-2 lg:col-[1/2] lg:bg-white lg:rounded-md duration-300`}
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
              </div>

              <Modal
                showModal={showModal}
                modalTitle={`Hapus ${selectedProduct.length} Produk`}
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
