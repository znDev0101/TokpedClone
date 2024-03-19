import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/button/Button"
import { FaArrowLeftLong } from "react-icons/fa6"

export const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-screen bg-white px-5 flex flex-col pt-5 gap-y-5 ">
      <div className="flex justify-between">
        <div className="flex gap-x-3 items-center ">
          <FaArrowLeftLong className="text-lg" onClick={() => navigate(-1)} />
          <h5 className="font-bold text-xl">Masuk</h5>
        </div>
        <h5 className="text-green-500 font-bold text-lg">Daftar</h5>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Nomor Hp atau Email"
          className="outline-none focus:border-b-2 focus:border-green-600 border-b-2  border-gray-200 absolute duration-300  w-full py-4"
        />
      </div>
      <Link>
        <h5 className="flex justify-end text-md text-green-600 mt-12">
          Butuh Bantuan?
        </h5>
      </Link>
      <Button
        textButton={"Selanjutnya"}
        styleButton={
          "w-full transition-300 bg-gray-300 py-2 font-bold rounded-lg text-lg text-gray-500"
        }
      />
      <div className="grid grid-cols-[1fr_max-content_1fr] items-center gap-x-3">
        <hr className="border border-gray-200" />
        <p className="m-auto text-gray-400">atau masuk dengan</p>
        <hr className="border border-gray-200" />
      </div>
      <Button
        textButton={"Metode Lain"}
        styleButton={
          "border-2 border-gray-300 py-2 rounded-lg font-bold text-gray-400 text-lg"
        }
      />
      <p className="text-center">
        Belum punya akun? <span className="text-green-600">Daftar</span>{" "}
      </p>
    </div>
  )
}
