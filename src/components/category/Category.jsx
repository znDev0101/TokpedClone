import React from "react"
import { faList, faSuitcase, faLaptop } from "@fortawesome/free-solid-svg-icons"
import { faGem } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function Category() {
  return (
    <div className="w-full h-20  grid grid-cols-5 gap-x-5 text-center overflow-x-scroll overflow-y-hidden lg:overflow-x-hidden ">
      <div className="flex flex-col gap-y-1 items-center">
        <FontAwesomeIcon icon={faList} size="2xl" />
        <p className="text-sm lg:text-lg">Liat Semua</p>
      </div>
      <Link to={`/products/category/mens_clothing`}>
        <div className="flex flex-col gap-y-1 items-center">
          <FontAwesomeIcon icon={faSuitcase} size="2xl" />
          <p className="text-sm lg:text-lg">Baju Pria</p>
        </div>
      </Link>
      <Link to={"/products/category/jewelery"}>
        <div className="flex flex-col gap-y-1 items-center">
          <FontAwesomeIcon icon={faGem} size="2xl" />
          <p className="text-sm lg:text-lg">Perhiasan</p>
        </div>
      </Link>
      <Link to={`/products/category/electronics`}>
        <div className="flex flex-col gap-y-1 items-center">
          <FontAwesomeIcon icon={faLaptop} size="2xl" />
          <p className="text-sm lg:text-lg">Electronics</p>
        </div>
      </Link>
      <Link to={`/products/category/womens_clothing`}>
        <div className="flex flex-col gap-y-1 items-center">
          <FontAwesomeIcon icon={faList} size="2xl" />
          <p className="text-sm lg:text-lg">Baju Wanita</p>
        </div>
      </Link>
    </div>
  )
}

export default Category
