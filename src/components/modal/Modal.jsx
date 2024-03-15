import React, { useEffect, useContext, forwardRef } from "react"
import { MyContext } from "../../context/MyContext"

const Modal = forwardRef(
  ({ modalTitle, modalParagraph, handleDelete }, modalRef) => {
    const { isShowModal, setIsShowModal } = useContext(MyContext)

    useEffect(() => {
      if (isShowModal) document.body.classList.add("overflow-hidden")

      return () => {
        document.body.classList.remove("overflow-hidden")
      }
    }, [isShowModal])

    return (
      <div
        className={` w-[85%] h-max m-[40dvh_auto]    lg:max-w-sm p-4 fixed top-0 bottom-0 left-0 right-0 bg-white   rounded-md shadow-md   ${
          isShowModal ? `scale-100 z-50 duration-200` : `scale-75 -z-50 `
        }`}
        ref={modalRef}>
        <h2 className="text-center font-bold">{modalTitle}</h2>
        <p className="text-center">{modalParagraph}</p>
        <div className="flex justify-center gap-x-5 mt-5">
          <button
            className="w-full  bg-white text-green-500 border border-green-500 font-bold py-1 rounded-md"
            onClick={() => setIsShowModal(!isShowModal)}>
            Batal
          </button>
          <button
            className="bg-green-600 w-full text-white font-bold py-1 rounded-md"
            onClick={() => handleDelete()}>
            Hapus
          </button>
        </div>
      </div>
    )
  }
)

export default Modal
