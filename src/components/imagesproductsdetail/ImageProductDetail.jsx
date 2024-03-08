import React from "react"

const ImageProductDetail = ({ image, loading }) => {
  return (
    <div className="w-full h-96 lg:w-72 lg:h-96 lg:sticky lg:top-36  lg:mt-3 lg:self-start">
      {loading ? (
        <p className="text-2xl font-bold text-center">Image Loading...</p>
      ) : (
        <img
          src={image}
          alt="image-product"
          className="w-full h-full object-contain"
        />
      )}
    </div>
  )
}

export default ImageProductDetail
