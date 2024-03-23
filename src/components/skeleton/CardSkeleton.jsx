import React from "react"

const CardSkeleton = ({ cards }) => {
  return new Array(cards).fill("").map((data, index) => {
    return (
      <div
        className="w-full h-[20.5rem]  border border-gray-300  rounded-md overflow-hidden"
        key={index}>
        <div className="w-full h-[65%] bg-gray-300  animate-pulse"></div>
        <div className="w-full h-5 mt-3 bg-gray-300  animate-pulse"></div>
        <div className="w-full h-5 mt-3 bg-gray-300  animate-pulse"></div>
        <div className="w-full h-5 mt-3 bg-gray-300  animate-pulse"></div>
      </div>
    )
  })
}

export default CardSkeleton
