import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import { HiOutlineHome } from "react-icons/hi2"
import { BiSlideshow } from "react-icons/bi"
import { BsBagCheck } from "react-icons/bs"
import { FaRegHeart } from "react-icons/fa"
import { SlNote } from "react-icons/sl"
import { FaHeart } from "react-icons/fa6"
import { CgNotes } from "react-icons/cg"

function NavbarOnMobile() {
  const { pathname } = useLocation()

  return (
    <nav className="w-full h-14 grid grid-cols-[repeat(5,1fr)] text-center m-auto bg-white fixed bottom-0 align_items_center z-50">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center ${
            isActive && `text-green-500 fill-green-500`
          }`
        }>
        {pathname === "/" ? (
          <HiOutlineHome className="text-xl duration-300" fill="#22c55e" />
        ) : (
          <HiOutlineHome className="text-xl" />
        )}
        <p className={`text-xs`}>Home</p>
      </NavLink>

      <NavLink className="flex flex-col items-center">
        <BiSlideshow className="text-xl" />
        <p className="text-xs">Feed</p>
      </NavLink>
      <NavLink className="flex flex-col items-center">
        <BsBagCheck className="text-xl" />
        <p className="text-xs">Official Store</p>
      </NavLink>
      <NavLink
        to="/wishlist"
        className={({ isActive }) =>
          ` flex flex-col items-center ${isActive && `text-green-500`}`
        }>
        {pathname === "/wishlist" ? (
          <FaHeart className="text-xl duration-700" />
        ) : (
          <FaRegHeart className="text-xl" />
        )}

        <p className="text-xs">Wishlist</p>
      </NavLink>
      <NavLink className="flex flex-col items-center">
        <CgNotes className="text-xl" />
        <p className="text-xs">Transaksi</p>
      </NavLink>
    </nav>
  )
}

export default NavbarOnMobile
