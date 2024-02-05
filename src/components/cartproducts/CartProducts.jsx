import { faHeart, faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { incrementCart, selectCancelCartProduct, sumPrice, selectProduct, decrementCart, removeCart, booleanChecked, booleanCart } from '../../redux/cartSlice/cartSlice';

const CartProducts = ({ id, title, image, dataCartProduct, dataCart, priceProduct }) => {
  const { totalPrice, cartProduct, selectedProduct, cartBoolean } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState([]);

  const { price, stock, quantity } = dataCartProduct;

  useEffect(() => {
    const filterCartBoolean = cartBoolean.filter((data) => data.id === id);
    setIsChecked(filterCartBoolean[0].boolean);
    if (!isChecked) {
      dispatch(selectProduct({ id }));
    } else {
      dispatch(selectCancelCartProduct({ id }));
    }
  }, [cartBoolean]);

  useEffect(() => {
    if (quantity === 0) {
      dispatch(removeCart({ id }));
      toast.warn('🗑️, belanjaan kamu di hapus dari keranjang', {
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
    }
  }, [quantity]);

  const handleChange = () => {
    dispatch(booleanCart({ id }));
  };

  const handleIncrement = () => {
    if (stock !== 0) {
      dispatch(incrementCart({ id, priceProduct }));
      dispatch(sumPrice());
    }
  };

  const handleDecrement = () => {
    dispatch(decrementCart({ id, priceProduct }));
  };

  return (
    <div className="flex px-5 py-1 pt-4 gap-x-3" key={id}>
      <div className="w-5 h-5 mt-2">
        <input type="checkbox" checked={isChecked} onChange={handleChange} className="w-full h-full" />
      </div>
      <div className="relative grid grid-cols-[max-content_1fr] h-full gap-x-5 w-full">
        <div className="w-32 h-32">
          <Link to={`/product_detail/${id}`}>
            <img src={image} alt="img-product" className="w-full h-full object-contain" />
          </Link>
        </div>
        <div className="flex flex-col gap-y-1 w-full">
          <Link to={`/product_detail/${id}`} className="flex flex-col">
            <h5 className={stock === 0 ? `text-red-700 font-bold` : `text-black`}>{stock < 5 && `sisa ${stock}`}</h5>
            <h5>{title.length > 20 ? `${title.slice(0, 20)}` : `${title}`}</h5>
            <span>{price}</span>
          </Link>
          <div className="flex justify-between">
            <div className="flex gap-x-5 absolute bottom-5">
              <FontAwesomeIcon icon={faNoteSticky} />
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="flex justify-between items-center w-20 h-6 rounded-md border border-gray-500 absolute right-0 bottom-4 p-1 ">
              <button className="text-xl text-green-600" onClick={handleDecrement}>
                -
              </button>
              <span>{quantity}</span>
              <button className="text-xl text-green-600" onClick={handleIncrement}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
