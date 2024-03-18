import React from "react"
import { FaRegHeart, FaRegStar, FaXmark } from "react-icons/fa6"
import { HiOutlineHome } from "react-icons/hi2"
import { IoIosStarOutline } from "react-icons/io"
import { Link } from "react-router-dom"
import Button from "../button/Button"
import { CgNotes } from "react-icons/cg"
import { BsQrCodeScan, BsShop } from "react-icons/bs"
import { TbUserExclamation } from "react-icons/tb"
import { RiUserVoiceLine } from "react-icons/ri"
import { CiStar } from "react-icons/ci"

const MainMenu = ({
  isOpenMainMenu,
  setIsOpenMainMenu,
  pathname,
  products,
}) => {
  return (
    <div
      className={
        isOpenMainMenu
          ? `w-full absolute top-0 bottom-0 left-0 right-0 h-screen bg-white overflow-y-scroll pb-10 z-50 duration-300 translate-y-0`
          : `w-full absolute top-0 bottom-0 left-0 right-0 h-screen  bg-white z-50 duration-300 translate-y-full`
      }>
      <div className="w-full pt-3 flex gap-x-5 items-center px-5">
        <FaXmark
          className="text-2xl"
          onClick={() => setIsOpenMainMenu(!isOpenMainMenu)}
        />
        <h1 className="text-lg font-bold">Menu Utama</h1>
      </div>
      <div className="m-auto grid grid-rows-2 grid-cols-[repeat(2,1fr)] gap-x-2 px-5">
        <Link
          className="row-[2] col-[1/2]"
          to="/login"
          onClick={() => setIsOpenMainMenu(false)}>
          <Button
            styleButton={
              " w-full h-full bg-green-600 font-bold text-white py-1 rounded-lg"
            }
            textButton={"Masuk"}
          />
        </Link>
        <Button
          styleButton={
            "row-[2] col-[2] w-full h-full bg-white border border-2 border-green-600 font-bold text-green-600 py-1 rounded-lg"
          }
          textButton={"Daftar"}
        />
      </div>
      {pathname !== "/" ? (
        <div className="mt-5 px-5">
          <Link
            to="/"
            className="flex items-center "
            onClick={() => setIsOpenMainMenu(!isOpenMainMenu)}>
            <HiOutlineHome className="text-lg" />
            <span className="ms-3 text-md">Kembali ke Home</span>
          </Link>
        </div>
      ) : null}

      <div className="w-full mt-5 border-[5px] border-gray-200"></div>
      <nav className="mt-4 px-5">
        <ul className="flex flex-col items-start   gap-y-8  ">
          <li>
            <Link className="flex gap-x-3 items-center ">
              <CgNotes className="text-lg" />
              <span className="text-md">Daftar Transaksi</span>
            </Link>
          </li>
          <li>
            <Link className="flex gap-x-3 items-center ">
              <FaRegStar className="text-xl" />
              <span className="text-md">Ulasan</span>
            </Link>
          </li>
          <li>
            <Link
              to="/wishlist"
              className="flex gap-x-3 items-center"
              onClick={() => setIsOpenMainMenu(!isOpenMainMenu)}>
              <FaRegHeart className="text-lg" />
              <span className="text-md">Wishlist</span>
            </Link>
          </li>
          <li>
            <Link className="flex gap-x-3 items-center">
              <BsShop className="text-lg" />
              <span>Toko yang di-follow</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-full mt-5 border-[5px] border-gray-100"></div>
      <nav className="mt-5 px-5">
        <ul className="flex flex-col gap-y-8">
          <li>
            <Link className="flex gap-x-3 items-center">
              <TbUserExclamation className="text-lg" />
              <span className="text-md">Pesanan Dikomplain</span>
            </Link>
          </li>
          <li>
            <Link className="flex gap-x-3 items-center">
              <RiUserVoiceLine className="text-lg" />
              <span className="text-md">Bantuan</span>
            </Link>
          </li>
          <li>
            <Link className="flex gap-x-3 items-center">
              <BsQrCodeScan className="text-lg" />
              <span className="text-md">Scan Kode QR</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MainMenu
