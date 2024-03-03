import React from "react"
import { useSelector } from "react-redux"

const RingkasanBelanja = () => {
  const { totalPrice, selectedProduct } = useSelector((state) => state.cart)

  return (
    <div className="hidden lg:block lg:sticky lg:self-start lg:row-[1] lg:col-[2] lg:top-36 lg:container  lg:bg-white lg:rounded-md lg:p-5">
      <h1 className="font-bold">Ringkasan Belanja</h1>
      <div className="flex justify-between mt-4">
        <span className="text-gray-600">Total</span>
        {selectedProduct.length !== 0 ? (
          <span>$ {totalPrice}</span>
        ) : (
          <span>-</span>
        )}
      </div>
      <button className="w-full mt-7 py-2 text-white font-bold text-center bg-green-500 rounded-md">
        {selectedProduct.length !== 0
          ? `Beli (${selectedProduct.length})`
          : `Beli`}
      </button>
    </div>
  )
}

export default RingkasanBelanja
