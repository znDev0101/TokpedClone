import React from 'react';

const Modal = ({ showModal, setShowModal, modalTitle, modalParagraph, handleDelete }) => {
  // const handleDelete = () => {
  //   dispatch(deleteCartProduct());
  //   setShowModal(!showModal);
  //   toast.success('Belanjaan kamu berhasil di hapus', {
  //     position: 'bottom-right',
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: 'light',
  //     transition: Bounce,
  //   });
  // };

  return (
    <>
      {showModal && (
        <div
          className={
            showModal
              ? 'w-[90%]  absolute top-[40%] left-[50%] translate-x-[-50%] scale-100 translate-y-[50%]   bg-white shadow-lg shadow-gray-500 rounded-md p-3 border border-green-600 z-50 duration-500'
              : 'w-[90%] absolute top-[40%] left-[50%] translate-x-[-50%] scale-0 -translate-y-[50%]   bg-white shadow-lg shadow-gray-500 rounded-md p-3 border border-green-600 z-50 duration-500'
          }
        >
          <h2 className="text-center font-bold">{modalTitle}</h2>
          <p className="text-center">{modalParagraph}</p>
          <div className="flex justify-center gap-x-5 mt-5">
            <button className="w-full bg-white text-gray-700 font-bold py-1 rounded-md" onClick={() => setShowModal(!showModal)}>
              Batal
            </button>
            <button className="bg-green-600 w-full text-white font-bold py-1 rounded-md" onClick={() => handleDelete()}>
              Hapus
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
