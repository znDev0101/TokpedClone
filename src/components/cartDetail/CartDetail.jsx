import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { resetTotalPrice } from '../../redux/cartSlice/cartSlice';
import CartProducts from '../cartproducts/CartProducts';
import Modal from '../modal/Modal';
import SumPrice from '../sumprice/SumPrice';

const CartDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [isShowDeleteBtn, setIsShowDeleteBtn] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { cartProduct, selectedProduct, totalPrice, cartBoolean } = useSelector((state) => state.cart);

  const { data, loading } = useFetch('https://fakestoreapi.com/products/');

  useEffect(() => {
    return () => {
      dispatch(resetTotalPrice());
    };
  }, []);

  useEffect(() => {
    if (selectedProduct.length !== 0) {
      setIsShowDeleteBtn(true);
    } else {
      setIsShowDeleteBtn(false);
    }
  }, [selectedProduct]);

  return (
    <div className={cartProduct.length < 4 ? 'w-full h-screen  pt-10 pb-16 z-40' : 'w-full   pt-10 pb-16 z-40'}>
      {cartProduct.length === 0 ? (
        <div className="flex flex-col px-5 gap-y-5 mt-12">
          <div className="flex gap-x-5">
            <FontAwesomeIcon icon={faCartShopping} size="4x" className="text-green-600" />
            <div className="flex flex-col gap-y-1">
              <h5 className="font-bold text-lg">Wah, Keranjang belanjamu kosong</h5>
              <p className="text-sm">Yuk, isi dengan barang-barang impianmu!</p>
            </div>
          </div>
          <button className="w-full bg-green-600 font-bold text-white py-1 rounded-md" onClick={() => navigate('/')}>
            Mulai belanja
          </button>
        </div>
      ) : (
        <>
          <div className={isShowDeleteBtn ? 'w-full translate-y-full grid grid-cols-[repeat(2,1fr)] duration-300 px-5' : 'w-full -translate-y-28 grid grid-cols-[repeat(2,1fr)] duration-300 px-5'}>
            <span>{selectedProduct.length} product terpilih</span>
            <button className="text-end font-bold text-green-600" onClick={() => setShowModal(!showModal)}>
              Hapus
            </button>
          </div>
          {cartProduct.map((dataCartProduct) => {
            return data
              .filter(({ id }) => id == dataCartProduct.id)
              .map(({ id: idProduct, title, image, price }) => {
                return <CartProducts id={idProduct} priceProduct={price} dataCart={cartProduct} dataCartProduct={dataCartProduct} title={title} image={image} />;
              });
          })}
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <SumPrice />
        </>
      )}
    </div>
  );
};

export default CartDetail;
