import React, { forwardRef, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Button from "../button/Button"
import { MyContext } from "../../context/MyContext"
import { BsQrCodeScan } from "react-icons/bs"
import { FaXmark } from "react-icons/fa6"
import { HiXMark } from "react-icons/hi2"

const ModalSignIn = forwardRef(({}, insideElementRef) => {
  const { isShowModalSignIn, setIsShowModalSignIn } = useContext(MyContext)

  useEffect(() => {
    if (isShowModalSignIn) document.body.classList.add("overflow-hidden")

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isShowModalSignIn])

  return (
    <div
      className={`max-w-sm min-h-max m-auto fixed top-16 bottom-0 left-0 right-0 px-10 bg-white rounded-md pb-7 ${
        isShowModalSignIn
          ? `scale-100 z-50 duration-300 opacity-100`
          : `scale-150 -z-50 opacity-0`
      }`}
      ref={insideElementRef}>
      <HiXMark
        className="absolute top-4 right-4 hover:cursor-pointer text-gray-800 hover:bg-gray-200 rounded-md duration-200 text-4xl"
        onClick={() => setIsShowModalSignIn(false)}
      />
      <div className="flex items-end justify-between mt-28">
        <h5 className="font-bold text-3xl">Masuk</h5>
        <Link to="/" className="text-green-600 font-semibold text-sm">
          Daftar
        </Link>
      </div>
      <div className=" flex flex-col mt-16 gap-y-3">
        <label className="font-bold text-sm text-gray-600">
          Nomor HP atau Email
          <input
            type="email"
            className="w-full ps-3 py-2 duration-300 outline-none border border-gray-300 focus:border focus:border-green-500 rounded-md mt-1 font-normal text-black"
          />
        </label>
        <span className="self-end">
          <Link className="text-green-600 text-sm font-semibold">
            Butuh bantuan?
          </Link>
        </span>
        <Button
          textButton={"Selanjutnya"}
          styleButton={`font-bold text-gray-400 bg-gray-300 py-2 rounded-md`}
        />
        <div className="grid grid-cols-[1fr_max-content_1fr] items-center gap-x-4">
          <hr className="border border-gray-300 w-full" />
          <span className="text-gray-400 text-sm">atau masuk dengan</span>
          <hr className="border border-gray-300 w-full" />
        </div>
        <button className="flex items-center gap-x-2 justify-center text-gray-500 font-bold border border-gray-400 py-2 rounded-md">
          <BsQrCodeScan />
          Scan Kode QR
        </button>
        <Button
          textButton={`Metode Lain`}
          styleButton={`text-black text-sm font-bold border border-gray-400 py-2 rounded-md`}
        />
      </div>
    </div>
  )
})

export default ModalSignIn
