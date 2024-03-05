import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  falseAllBooleanChecked,
  trueAllBooleanChecked,
} from "../../redux/cartSlice/cartSlice"
import Button from "../button/Button"
import { useCheckedProduct } from "../../hooks/useCheckedProduct"

const SumPrice = () => {
  const { totalPrice, selectedProduct } = useSelector((state) => state.cart)
  const [totalBeliProductBarang, setTotalBeliProductBarang] = useState(0)

  const { isChecked, setIsChecked } = useCheckedProduct()
  const dispatch = useDispatch()

  useEffect(() => {
    if (selectedProduct.length !== 0) {
      const resultTotalPembelianBarang = selectedProduct.reduce(
        (accumulator, { quantity }) => {
          return accumulator + quantity
        },
        0
      )
      setTotalBeliProductBarang(resultTotalPembelianBarang)
    } else {
      setTotalBeliProductBarang(0)
    }
  }, [selectedProduct])

  const handleChange = () => {
    setIsChecked(!isChecked)
    if (isChecked) {
      dispatch(falseAllBooleanChecked())
    } else {
      dispatch(trueAllBooleanChecked())
    }
  }

  return (
    <div className="w-full fixed bottom-0 flex justify-between py-1 px-5 bg-white lg:hidden">
      <div className="flex gap-x-2 items-center">
        <div className="w-6 h-6">
          <input
            type="checkbox"
            className="w-full h-full"
            checked={isChecked}
            onChange={handleChange}
          />
        </div>
        <h5>Semua</h5>
      </div>
      <div className="flex gap-x-3 items-center">
        <div className="flex flex-col gap-y-1 text-right">
          <h5>Total</h5>
          <span>{totalPrice === 0 ? `-` : `${totalPrice}`}</span>
        </div>
        {totalBeliProductBarang !== 0 ? (
          <Button
            textButton={`Beli (${totalBeliProductBarang})`}
            styleButton={`w-20 font-bold text-white px-2 py-2 rounded-md bg-green-600`}
          />
        ) : (
          <Button
            textButton={`Beli `}
            styleButton={`w-20 font-bold text-white px-2 py-2 rounded-md bg-green-600`}
          />
        )}
      </div>
    </div>
  )
}

export default SumPrice
