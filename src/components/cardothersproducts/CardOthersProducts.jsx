import React from "react"
import { FaStar } from "react-icons/fa6"
import { Link } from "react-router-dom"

function CardOthersProducts({ data, categoryProducts }) {
  return (
    <Link to={`/product_detail/${data.id}`}>
      <div className="w-36 relative grid grid-rows-[repeat(3,max-content)] gap-y-2 border border-gray-700 rounded-md py-3">
        <div className="w-full px-2 h-40">
          <img
            src={data.image}
            alt="image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-20 ps-2">
          <span>{data.title.slice(0, 20)}</span>
          <br />
          <span className="font-bold">${data.price}</span>
        </div>
        <div className="flex items-center ms-2  gap-x-2 ">
          <span>{data.rating.rate}</span>
          <span className="text-gray-500">|</span>
          <FaStar className="text-yellow-400" />
          <span className="text-gray-500 text-xs">Terjual 100+</span>
        </div>
      </div>
    </Link>
  )
}

export default CardOthersProducts
