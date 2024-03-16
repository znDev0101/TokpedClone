import React, { useContext, useEffect } from "react"
import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faArrowLeft,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons"
import {
  faEnvelope,
  faBell,
  faHeart,
} from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
import { useDebounce } from "../../hooks/useDebounce"
import MainMenu from "../mainmenu/MainMenu"
import { MyContext } from "../../context/MyContext"
import { useDispatch, useSelector } from "react-redux"
import { resetCheckBooleanFalse } from "../../redux/wishlistSlice/wishListSlice"
import SearchKeyword from "../searchkeyword/SearchKeyword"

function Navbar({ setIsOpenMainMenu, isOpenMainMenu }) {
  const [seacrhKeyword, setSeacrhKeyword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [noResult, setNoResult] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const valueDebounce = useDebounce(seacrhKeyword)
  const totalCart = useSelector((state) => state.cart.totalCart)
  const dispatch = useDispatch()

  const {
    isActiveSearchKeyword,
    aturWishList,
    setAturWishList,
    setIsActiveSearchKeyword,
  } = useContext(MyContext)

  useEffect(() => {
    if (seacrhKeyword.length > 0 && data.length == 0) {
      setNoResult(true)
    } else {
      setNoResult(false)
    }
  }, [data])

  useEffect(() => {
    if (pathname !== "/") {
      setData([])
      setSeacrhKeyword("")
    }
  }, [pathname])

  useEffect(() => {
    if (seacrhKeyword.length === 0) setData([])
  }, [seacrhKeyword])

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const result = await response.json()
        const resultSearch = result.filter(({ title }) =>
          title.toLowerCase().includes(seacrhKeyword.toLowerCase())
        )

        if (resultSearch.length > 10) {
          const coppyArr = resultSearch.slice(0, 10)
          setData(coppyArr)
          setIsLoading(false)
        } else {
          setData(resultSearch)
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }

    if (seacrhKeyword.length > 0) getData()
  }, [valueDebounce])

  const handleClick = () => {
    if (pathname !== "/wishlist") setIsActiveSearchKeyword(true)
  }

  console.log(isActiveSearchKeyword)

  return (
    <>
      {pathname !== "/login" && (
        <header className="w-full bg-white fixed top-0 grid grid-rows-[2rem] py-3  z-40 lg:hidden">
          {/* Navbar One */}
          <div
            className={
              isActiveSearchKeyword
                ? `w-[90%] m-auto grid grid-cols-[max-content_2fr] items-center  gap-x-5  duration-300`
                : pathname === "/cart_detail"
                ? "w-full px-4 grid grid-cols-[repeat(2,1fr)] items-center justify-between "
                : pathname === "/wishlist"
                ? "w-full px-4 grid grid-cols-[repeat(2,max-content_1fr)] grid-rows-[repeat(2,1fr)] gap-y-3 items-center  justify-between"
                : pathname === "/ulansan_pembeli"
                ? "flex gap-x-3"
                : pathname !== "/"
                ? `w-[95%] m-auto grid grid-cols-[max-content_2fr_1fr] items-center  gap-x-4`
                : `w-[92%] m-auto grid grid-cols-[2fr_1fr] align_items_center gap-x-5   justify-between`
            }>
            {isActiveSearchKeyword ||
            pathname !== "/" ||
            pathname === "/cart_detail" ? (
              <div className="flex gap-x-4 items-center">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  size="xl"
                  onClick={
                    isActiveSearchKeyword
                      ? () => setIsActiveSearchKeyword(false)
                      : () => navigate(-1)
                  }
                />
                {pathname === "/cart_detail" ? (
                  <h5 className="col-[1/2] text-lg font-bold">Keranjang</h5>
                ) : pathname === "/ulasan_pembeli" ? (
                  <h5 className="text-lg font-bold">Ulasan Pembeli</h5>
                ) : (
                  pathname === "/wishlist" &&
                  (aturWishList ? (
                    <h5 className="col-[1/2] text-lg font-bold">
                      Atur Semua Wishlist
                    </h5>
                  ) : (
                    <h5 className="col-[1/2] text-lg font-bold">
                      Semua Wishlist
                    </h5>
                  ))
                )}
              </div>
            ) : null}
            {pathname !== "/cart_detail" && pathname !== "/ulasan_pembeli" && (
              <div
                className={
                  pathname === "/wishlist"
                    ? "w-full row-[2] col-[1/5] relative bg-white border border-gray-700 rounded-md z-50"
                    : "w-full relative border border-gray-700 rounded-md z-50"
                }>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="lg"
                  className="p-2"
                />
                <input
                  type="text"
                  className="border-none outline-none absolute top-0 bottom-0 right-1 left-8 placeholder:font-bold z-50"
                  value={seacrhKeyword}
                  placeholder={
                    pathname === "/wishlist"
                      ? "Cari barang atau toko"
                      : "Cari di Tokopedia"
                  }
                  onClick={() => setIsActiveSearchKeyword(true)}
                  onChange={(e) => setSeacrhKeyword(e.target.value)}
                />
              </div>
            )}
            {!isActiveSearchKeyword
              ? pathname !== "/ulasan_pembeli" && (
                  <nav
                    className={
                      pathname === "/wishlist" ? "w-full col-[2/5]" : "w-full"
                    }>
                    <ul
                      className={
                        pathname === "/cart_detail" || pathname === "/wishlist"
                          ? "grid grid-cols-[repeat(2,max-content)] gap-x-4 justify-end"
                          : "grid grid-cols-[repeat(4,max-content)] gap-x-4 justify-end"
                      }>
                      {pathname === "/cart_detail" ||
                      pathname === "/wishlist" ? (
                        <>
                          <li className="relative">
                            {pathname === "/wishlist" && !aturWishList ? (
                              <Link to="/cart_detail">
                                <FontAwesomeIcon
                                  icon={faCartShopping}
                                  size="xl"
                                />
                                <span className="absolute w-max h-max bottom-4 -right-3 text-center rounded-full text-sm bg-green-600 text-white font-bold px-[.4rem]">
                                  {totalCart !== 0 && totalCart}
                                </span>
                              </Link>
                            ) : (
                              pathname === "/cart_detail" &&
                              !aturWishList && (
                                <Link to="/wishlist">
                                  <FontAwesomeIcon icon={faHeart} size="xl" />
                                </Link>
                              )
                            )}
                          </li>
                          {!aturWishList ? (
                            <li>
                              <FontAwesomeIcon
                                icon={faBars}
                                size="xl"
                                onClick={() =>
                                  setIsOpenMainMenu(!isOpenMainMenu)
                                }></FontAwesomeIcon>
                            </li>
                          ) : (
                            <span
                              className="text-green-600 font-bold"
                              onClick={() => {
                                setAturWishList(false)
                                dispatch(resetCheckBooleanFalse())
                              }}>
                              Batal
                            </span>
                          )}
                        </>
                      ) : (
                        <>
                          <li>
                            <Link>
                              <FontAwesomeIcon icon={faEnvelope} size="xl" />
                            </Link>
                          </li>
                          <li className="relative">
                            <Link>
                              <FontAwesomeIcon icon={faBell} size="xl" />
                            </Link>
                          </li>
                          <li className="relative">
                            <Link to="/cart_detail">
                              <FontAwesomeIcon
                                icon={faCartShopping}
                                size="xl"
                              />
                              <span className="absolute w-max h-max bottom-4 -right-3 text-center rounded-full text-sm bg-green-600 text-white font-bold px-[.4rem]">
                                {totalCart !== 0 && totalCart}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <FontAwesomeIcon
                              icon={faBars}
                              size="xl"
                              onClick={() =>
                                setIsOpenMainMenu(!isOpenMainMenu)
                              }></FontAwesomeIcon>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                )
              : null}
          </div>
          <MainMenu
            isOpenMainMenu={isOpenMainMenu}
            setIsOpenMainMenu={setIsOpenMainMenu}
            pathname={pathname}
          />
          {/* End Navbar one */}
        </header>
      )}

      <SearchKeyword
        seacrhKeyword={seacrhKeyword}
        isLoading={isLoading}
        isActiveSearchKeyword={isActiveSearchKeyword}
        setIsActiveSearchKeyword={setIsActiveSearchKeyword}
        noResult={noResult}
        data={data}
        styleLayout={
          "block lg:hidden fixed top-[-4px] w-full h-screen mt-14 pt-5 z-50 bg-white px-5"
        }
      />
    </>
  )
}

export default Navbar
