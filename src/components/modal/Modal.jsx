import React from "react"

const Modal = ({
  showModal,
  setShowModal,
  modalTitle,
  modalParagraph,
  handleDelete,
}) => {
  return (
    <>
      {showModal && (
        <div
          className={`max-w-sm h-max m-[40dvh_auto]  lg:max-w-sm p-4 absolute top-0 bottom-0 left-0 right-0 bg-white   rounded-md shadow-md duration-300 z-50 ${
            showModal ? `scale-100` : `scale-0`
          }`}>
          <h2 className="text-center font-bold">{modalTitle}</h2>
          <p className="text-center">{modalParagraph}</p>
          <div className="flex justify-center gap-x-5 mt-5">
            <button
              className="w-full  bg-white text-green-500 border border-green-500 font-bold py-1 rounded-md"
              onClick={() => setShowModal(!showModal)}>
              Batal
            </button>
            <button
              className="bg-green-600 w-full text-white font-bold py-1 rounded-md"
              onClick={() => handleDelete()}>
              Hapus
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
