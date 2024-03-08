import React, { useContext, useState, useEffect } from "react"
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
  const dispatch = useDispatch()

  useEffect(() => {
    const findIndexCheckBoxBoolean = checkBoxWishListBoolean.findIndex(
      (data) => data.id == id
    )
    setIndexCheckBoxBoolean(findIndexCheckBoxBoolean)
  }, [checkBoxWishListBoolean])

  return (
    <>
      {aturWishList ? (
        <div className="w-full relative  grid grid-rows-[16rem_1rem_1.2rem_1.2rem] border-2 border-gray-300 rounded-md shadow-md gap-y-5 pb-3">
          <div className="w-6 h-6 absolute right-3 top-2 ">
            <input
              type="checkbox"
              checked={checkBoxWishListBoolean[indexCheckBoxBoolean]?.boolean}
              onChange={() => dispatch(setCheckBoxBooleanWishList({ id }))}
              className="w-full h-full hover:cursor-pointer"
            />
          </div>
          <div className="w-full h-full flex items-center overflow-hidden px-2  mt-3 mx-auto">
            <img
              src={image}
              alt="image-product"
              className="object-contain w-full h-full"
            />
          </div>
          <h5 className="px-2 h-5 overflow-hidden">{title.slice(0, 17)}</h5>
          <h5 className="px-2 font-bold">${price}</h5>
          <div className="flex items-center gap-x-2 ms-2">
            <span className="text-gray-600">{rating?.rate}</span>
            <span className="text-gray-600">|</span>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            <span className="text-gray-600">Terjual 99+</span>
          </div>
        </div>
      ) : (
        <Link to={`${urlPath}/${id}`}>
          <div className="w-full  grid grid-rows-[16rem_1rem_1.2rem_1.2rem] border-2 border-gray-300 rounded-md shadow-md gap-y-5 pb-3">
            <div className="w-full h-full flex items-center overflow-hidden px-2  mt-3 mx-auto">
              <img
                src={image}
                alt="image-product"
                className="object-contain w-full h-full"
              />
            </div>
            <h5 className="px-2 h-5 overflow-hidden">{title?.slice(0, 17)}</h5>
            <h5 className="px-2 font-bold">${price}</h5>
            <div className="flex items-center gap-x-2 ms-2">
              <span className="text-gray-600">{rating?.rate}</span>
              <span className="text-gray-600">|</span>
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <span className="text-gray-600">Terjual 99+</span>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}

export default CardProducts
