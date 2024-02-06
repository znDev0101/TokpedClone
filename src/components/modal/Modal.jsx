import React from 'react';
import { useDispatch } from 'react-redux';
import { btnDeleteCart } from '../../redux/cartSlice/cartSlice';

const Modal = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  return (
    <>
      {showModal && (
        <div
          className={
            showModal
              ? 'w-[90%]  absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[50%]  opacity-100 bg-white shadow-lg shadow-gray-500 rounded-md p-3 border border-green-600 z-50 duration-500'
              : 'w-[90%] absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[50%] opacity-0  bg-white shadow-lg shadow-gray-500 rounded-md p-3 border border-green-600 z-50 duration-500'
          }
        >
          <h2 className="text-center font-bold">Hapus Barang</h2>
          <p className="text-center">Product yang kamu pilih akan di hapus dari Keranjang</p>
          <div className="flex justify-center gap-x-5 mt-5">
            <button className="w-full bg-white text-gray-700 font-bold py-1 rounded-md" onClick={() => setShowModal(!showModal)}>
              Batal
            </button>
            <button className="bg-green-600 w-full text-white font-bold py-1 rounded-md" onClick={() => dispatch(btnDeleteCart())}>
              Hapus
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
