import { useState, useEffect } from "react"

import { useSelector } from "react-redux"

export function useCheckedProduct() {
  const [isChecked, setIsChecked] = useState(false)
  const { cartBoolean } = useSelector((state) => state.cart)

  useEffect(() => {
    cartBoolean.some(({ boolean }) => {
      if (boolean === false) {
        setIsChecked(false)
      }
    })
    const checkIfAllCartBooleanTrue = cartBoolean.every(
      (data) => data.boolean == true
    )
    if (checkIfAllCartBooleanTrue) setIsChecked(true)
  }, [cartBoolean])

  return { isChecked, setIsChecked }
}
