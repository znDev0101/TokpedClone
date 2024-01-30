import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFetch } from '../../hooks/useFetch';
import CartProducts from '../cartproducts/CartProducts';
import Modal from '../modal/Modal';

const CartDetail = () => {
  const [showModal, setShowModal] = useState(false);

  const { cartProduct, selectProduct } = useSelector((state) => state.cart);

  const { data, loading } = useFetch('https://fakestoreapi.com/products/');

  return (
    <div className="w-full mt-16">
      {cartProduct.length === 0 ? (
        <div className="flex flex-col px-5 gap-y-5">
          <div className="flex gap-x-5">
            <FontAwesomeIcon icon={faCartShopping} size="4x" className="text-green-600" />
            <div className="flex flex-col gap-y-1">
              <h5 className="font-bold text-lg">Wah, Keranjang belanjamu kosong</h5>
              <p className="text-sm">Yuk, isi dengan barang-barang impianmu!</p>
            </div>
          </div>
          <button className="w-full bg-green-600 font-bold text-white py-1 rounded-md">Mulai belanja</button>
        </div>
      ) : (
        <>
          <div className="w-full grid grid-cols-[repeat(2,1fr)]  px-5">
            <span>{} product terpilih</span>
            <button className="text-end font-bold text-green-600" onClick={() => setShowModal(!showModal)}>
              Hapus
            </button>
          </div>
          {cartProduct.map(({ id: idCartProduct, stock, quantity, price }) => {
            return data
              .filter(({ id }) => id == idCartProduct)
              .map(({ id: idProduct, title, image }) => {
                return <CartProducts id={idProduct} idCartProduct={idCartProduct} price={price} quantity={quantity} stock={stock} title={title} image={image} />;
              });
          })}
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </>
      )}
    </div>
  );
};

export default CartDetail;
