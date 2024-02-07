import React from 'react';
import { useDispatch } from 'react-redux';
import { btnDeleteCart } from '../../redux/cartSlice/cartSlice';
import 'react-toastify/dist/ReactToastify.css';
import { toast, Bounce } from 'react-toastify';

const Modal = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(btnDeleteCart());
    setShowModal(!showModal);
    toast.success('Belanjaan kamu berhasil di hapus', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

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
          <h2 className="text-center font-bold">Hapus Barang</h2>
          <p className="text-center">Product yang kamu pilih akan di hapus dari Keranjang</p>
          <div className="flex justify-center gap-x-5 mt-5">
            <button className="w-full bg-white text-gray-700 font-bold py-1 rounded-md" onClick={() => setShowModal(!showModal)}>
              Batal
            </button>
            <button className="bg-green-600 w-full text-white font-bold py-1 rounded-md" onClick={handleDelete}>
              Hapus
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
