import React, { useContext, useState, useEffect, useRef } from "react"
import { Link, useOutletContext } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { setCheckBoxBooleanWishList } from "../../redux/wishlistSlice/wishListSlice"
import { MyContext } from "../../context/MyContext"

function CardProducts({ title, image, price, rating, urlPath, id }) {
  const { checkBoxWishListBoolean } = useSelector((state) => state.wishList)
  const [indexCheckBoxBoolean, setIndexCheckBoxBoolean] = useState([])
  const { aturWishList } = useContext(MyContext)
  const [isTextOverflow, setIsTextOverflow] = useState(false)
  const titleRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const findIndexCheckBoxBoolean = checkBoxWishListBoolean.findIndex(
      (data) => data.id == id
    )
    setIndexCheckBoxBoolean(findIndexCheckBoxBoolean)
  }, [checkBoxWishListBoolean])

  useEffect(() => {
    checkIsTextOverflow(titleRef)
  }, [])

  const checkIsTextOverflow = (targetElement) => {
    if (
      targetElement?.current.scrollWidth > targetElement?.current.clientWidth
    ) {
      setIsTextOverflow(true)
    } else {
      setIsTextOverflow(false)
    }
  }

  return (
    <>
      {aturWishList ? (
        <div className="w-full relative h-[20.5rem] grid grid-rows-[12rem_1fr]  border border-gray-400 rounded-md shadow-md">
          <div className="w-5 h-5 absolute top-2 left-3">
            <input
              type="checkbox"
              name="select-product"
              className="w-full h-full hover:cursor-pointer"
              checked={checkBoxWishListBoolean[indexCheckBoxBoolean]?.boolean}
              onChange={() => dispatch(setCheckBoxBooleanWishList({ id }))}
            />
          </div>
          <div className="w-full h-full flex items-center overflow-hidden mt-2">
            <img
              src={image}
              alt="image-product"
              className="object-contain max-w-full h-full px-2 lg:px-1 mx-auto"
            />
          </div>
          <div className="flex flex-col gap-y-1 mt-4">
            <h5
              className={`px-2 ${
                title?.length > 8 && `line-clamp-2 overflow-hidden `
              }`}
              ref={titleRef}>
              {title}
            </h5>
            <h5 className={`px-2 font-bold`}>${price}</h5>
            <div className="flex items-center gap-x-2 ms-2 lg:text-sm">
              <span className="text-gray-600">{rating?.rate}</span>
              <span className="text-gray-600">|</span>
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <span className="text-gray-600">Terjual 99+</span>
            </div>
          </div>
        </div>
      ) : (
        <Link to={`${urlPath}/${id}`}>
          <div className="w-full h-[20.5rem] grid grid-rows-[12rem_1fr]  border border-gray-400 rounded-md shadow-md overflow-hidden">
            <div className="w-full h-full flex items-center overflow-hidden mt-2 ">
              <img
                src={image}
                alt="image-product"
                className="object-contain w-full h-full px-2 lg:px-1 mx-auto"
              />
            </div>
            <div className="flex flex-col gap-y-1 mt-4">
              <h5
                className={`px-2 ${
                  title?.length > 8 && `line-clamp-2 overflow-hidden `
                }`}
                ref={titleRef}>
                {title}
              </h5>
              <h5 className={`px-2 font-bold`}>${price}</h5>
              <div className="flex items-center gap-x-2 ms-2 lg:text-sm">
                <span className="text-gray-600">{rating?.rate}</span>
                <span className="text-gray-600">|</span>
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                <span className="text-gray-600">Terjual 99+</span>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}

export default CardProducts
