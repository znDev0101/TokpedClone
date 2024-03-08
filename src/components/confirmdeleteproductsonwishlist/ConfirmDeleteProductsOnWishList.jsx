import React from "react"
import Button from "../button/Button"

const ConfirmDeleteProductsOnWishList = ({
  showModal,
  setShowModal,
  itemSelected,
  btnHapusRef,
}) => {
  return (
    <div className="w-full fixed bottom-0 lg:hidden">
      <div className="px-5 py-1">
        <Button
          textButton={itemSelected === 0 ? `Hapus` : `Hapus (${itemSelected})`}
          styleButton={`w-full  font-bold rounded-xl py-2 ${
            itemSelected === 0
              ? `bg-gray-300 text-gray-500`
              : `bg-green-600 text-white`
          }`}
          disableBtn={itemSelected === 0}
          handleClick={() => setShowModal(!showModal)}
          ref={btnHapusRef}
        />
      </div>
    </div>
  )
}

export default ConfirmDeleteProductsOnWishList
