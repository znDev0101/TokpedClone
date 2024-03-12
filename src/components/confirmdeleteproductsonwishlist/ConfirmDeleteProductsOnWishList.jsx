import React, { forwardRef } from "react"
import Button from "../button/Button"

const ConfirmDeleteProductsOnWishList = forwardRef(
  ({ isShowModal, setIsShowModal, itemSelected }, modalRef) => {
    return (
      <div className="w-full fixed bottom-0 z-50 lg:hidden" ref={modalRef}>
        <div className="px-5 py-1">
          <Button
            textButton={
              itemSelected === 0 ? `Hapus` : `Hapus (${itemSelected})`
            }
            styleButton={`w-full  font-bold rounded-xl py-2 ${
              itemSelected === 0
                ? `bg-gray-300 text-gray-500`
                : `bg-green-600 text-white`
            }`}
            disableBtn={itemSelected === 0}
            handleClick={() => setIsShowModal(!isShowModal)}
          />
        </div>
      </div>
    )
  }
)

export default ConfirmDeleteProductsOnWishList
