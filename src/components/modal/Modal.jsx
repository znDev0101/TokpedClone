import React from 'react';

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div className="w-[90%] m-[50%_auto] bg-white shadow-2xl shadow-gray-500 rounded-md p-3 border border-green-600 z-50">
          <h2 className="text-center font-bold">Hapus Barang</h2>
          <p className="text-center">Product yang kamu pilih akan di hapus dari Keranjang</p>
          <div className="flex justify-center gap-x-5 mt-5">
            <button className="w-full bg-white text-gray-700 font-bold py-1 rounded-md" onClick={() => setShowModal(!showModal)}>
              Batal
            </button>
            <button className="bg-green-600 w-full text-white font-bold py-1 rounded-md">Hapus</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
