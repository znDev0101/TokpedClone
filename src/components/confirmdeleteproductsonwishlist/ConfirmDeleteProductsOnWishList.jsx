import React, { forwardRef } from "react"
import Button from "../button/Button"
import { useOutletContext } from "react-router"

const ConfirmDeleteProductsOnWishList = forwardRef(
  ({ isShowModal, setIsShowModal, itemSelected }, btnConfirmDeleteRef) => {
    const { isOpenMainMenu } = useOutletContext()

    return (
      <div
        className={`w-full fixed bottom-0 z-50 ${
          isOpenMainMenu && `hidden`
        } lg:hidden`}
        ref={btnConfirmDeleteRef}>
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
