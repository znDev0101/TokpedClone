import React, { useRef } from "react"

import { Outlet, useLocation, useParams } from "react-router"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import useClickOutside from "../hooks/useClickOutside"
import ModalSignIn from "../components/modalsignin/ModalSignIn"
import NavbarOnMobile from "../components/navbaronmobile/NavbarOnMobile"
import { useState } from "react"
import { MyContext } from "../context/MyContext"
import { ToastContainer } from "react-toastify"
import NavbarOnDekstop from "../components/navbarondesktop/NavbarOnDekstop"

function Root() {
  const [isActiveSearchKeyword, setIsActiveSearchKeyword] = useState(false)
  const [isShowModal, setIsShowModal] = useState(false)
  const [isShowModalSignIn, setIsShowModalSignIn] = useState(false)
  const modalSignRef = useRef(null)
  const btnMasukRef = useRef(null)
  const [isOpenMainMenu, setIsOpenMainMenu] = useState(false)
  const [aturWishList, setAturWishList] = useState(false)
  const [urlPath, setUrlPath] = useState([])
  const { pathname } = useLocation()
  const { productId } = useParams()

  const clickOutside = () => {
    setIsShowModalSignIn(false)
  }

  useClickOutside(modalSignRef, btnMasukRef, clickOutside)

  return (
    <MyContext.Provider
      value={{
        isActiveSearchKeyword,
        isShowModal,
        isShowModalSignIn,
        setIsShowModalSignIn,
        setIsShowModal,
        setAturWishList,
        aturWishList,
      }}>
      <div className={`w-full  relative`}>
        <div
          className={`absolute top-0 bottom-0 right-0 left-0 ${
            isShowModal || isShowModalSignIn
              ? `bg-gray-500 opacity-60 z-50`
              : `-z-50`
          } `}></div>

        <ToastContainer className={`mb-12`} />
        {/* navbar on mobile */}
        <Navbar
          setIsActiveSearchKeyword={setIsActiveSearchKeyword}
          isOpenMainMenu={isOpenMainMenu}
          setIsOpenMainMenu={setIsOpenMainMenu}
        />
        {/* navbar on dekstop */}
        <NavbarOnDekstop
          isActiveSearchKeyword={isActiveSearchKeyword}
          setIsActiveSearchKeyword={setIsActiveSearchKeyword}
          ref={btnMasukRef}
        />
        <Outlet context={{ setUrlPath, isOpenMainMenu }} />
        {screen.width < 500 &&
        pathname !== "/cart_detail" &&
        pathname !== `/product_detail/${productId}` &&
        pathname !== `/products/category/${urlPath}` &&
        pathname !== "/ulasan_pembeli" ? (
          <>
            {!isActiveSearchKeyword && !isOpenMainMenu && !aturWishList ? (
              <NavbarOnMobile />
            ) : null}
          </>
        ) : null}
        {/* <Footer /> */}
        <ModalSignIn ref={modalSignRef} />
      </div>
    </MyContext.Provider>
  )
}

export default Root
