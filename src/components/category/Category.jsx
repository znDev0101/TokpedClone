import React from "react"
import { Link } from "react-router-dom"
import { MdBorderAll } from "react-icons/md"
import { GiClothes } from "react-icons/gi"
import { GiBigDiamondRing } from "react-icons/gi"
import { GiLaptop } from "react-icons/gi"

function Category() {
  return (
    <div className="w-full h-20  grid grid-cols-5 gap-x-5 text-center overflow-x-scroll overflow-y-hidden lg:overflow-x-hidden ">
      <div className="flex flex-col gap-y-1 items-center">
        <MdBorderAll className="text-4xl text-gray-800" />
        <p className="text-sm lg:text-lg">Liat Semua</p>
      </div>
      <Link to={`/products/category/mens_clothing`}>
        <div className="flex flex-col gap-y-1 items-center">
          <GiClothes className="text-4xl text-gray-800" />
          <p className="text-sm lg:text-lg">Baju Pria</p>
        </div>
      </Link>
      <Link to={"/products/category/jewelery"}>
        <div className="flex flex-col gap-y-1 items-center">
          <GiBigDiamondRing className="text-4xl text-gray-800" />
          <p className="text-sm lg:text-lg">Perhiasan</p>
        </div>
      </Link>
      <Link to={`/products/category/electronics`}>
        <div className="flex flex-col gap-y-1 items-center">
          <GiLaptop className="text-4xl text-gray-800" />
          <p className="text-sm lg:text-lg">Electronics</p>
        </div>
      </Link>
      <Link to={`/products/category/womens_clothing`}>
        <div className="flex flex-col gap-y-1 items-center">
          <GiClothes className="text-4xl text-gray-800" />
          <p className="text-sm lg:text-lg">Baju Wanita</p>
        </div>
      </Link>
    </div>
  )
}

export default Category
