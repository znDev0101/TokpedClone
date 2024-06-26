import React, { useEffect } from "react"
import CardSkeleton from "../skeleton/CardSkeleton"
import { MdLocationPin } from "react-icons/md"

import CardProducts from "../cardproducts/CardProducts"
import Button from "../button/Button"
import Category from "../category/Category"
import ScrollToTop from "../scrolltotop/ScrollToTop"
import { useLocation, useNavigate } from "react-router"
import { useGetAllProductsQuery } from "../../redux/services/ecommerceApi"
import { FaCaretDown } from "react-icons/fa"

function HomeProducts() {
  const { data, error, isLoading } = useGetAllProductsQuery()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <>
      <div className={`w-[92%] h-full pt-16 m-auto  lg:hidden`}>
        <div className="items-center flex gap-x-2">
          <MdLocationPin className="text-green-600" />
          <div className="text-sm">
            Dikirim ke{" "}
            <span className="font-bold">Pancoran, Jakarta Selatan</span>
          </div>
          <FaCaretDown />
        </div>
        <div className=" grid grid-cols-[2fr_1fr] mt-3 items-center">
          <div className="flex gap-x-2 items-center">
            <img
              src="https://images.tokopedia.net/img/home/login_widget/toped_login.png?ect=3g"
              alt="profile-img"
              className="w-9 h-10"
            />
            <div>
              <p className="font-bold">Hai,Tropper!</p>
              <p>Akses semua fitur yuk!</p>
            </div>
          </div>
          <Button
            styleButton={
              " text-white ms-5 font-bold py-2 rounded-lg bg-green-600 "
            }
            textButton={"Masuk"}
            handleClick={() => navigate("/login")}
          />
        </div>
      </div>
      {/* <SliderImages /> */}
      {/* Layout Products */}
      <div
        className={
          "w-full min-h-screen mx-auto bg-white mt-8 lg:mt-0 lg:pt-40 pb-20 lg:pb-10 px-4 lg:px-16"
        }>
        <Category />

        <div
          className={`grid ${
            pathname !== "/"
              ? `grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3`
              : `grid-cols-[repeat(auto-fit,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] mt-6 lg:mt-8 gap-3`
          } `}>
          {isLoading ? (
            <CardSkeleton cards={20} />
          ) : (
            data?.map(({ id, image, title, price, rating }) => {
              return (
                <CardProducts
                  key={id}
                  id={id}
                  image={image}
                  title={title}
                  price={price}
                  rating={rating}
                  urlPath={`product_detail`}
                />
              )
            })
          )}
        </div>
        <ScrollToTop
          styleIfTrue={
            "fixed w-12 justify-center items-center flex h-12 bottom-20 lg:bottom-7 right-6 text-xl rounded-full shadow-lg bg-white z-50 duration-300 translate-y-0 hover:cursor-pointer "
          }
          styleIffalse={
            "fixed w-12 justify-center items-center flex h-12 bottom-0 right-6 rounded-full shadow-lg bg-white duration-300 translate-y-full"
          }
          onClick={() => window.scrollTo(0, 0)}
          numberScrollYWindow={400}
        />
      </div>
    </>
  )
}

export default HomeProducts
