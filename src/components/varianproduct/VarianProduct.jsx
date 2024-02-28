import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import NavbarOnProductDetail from '../navbaronproductdetail/NavbarOnProductDetail';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const VarianProduct = ({ filterVarianProduct, productId, isOpenVarianProduct, setIsOpenVarianProduct, imageProduct, price, handleClick, stock: stockProduct }) => {
  const { cartProduct } = useSelector((state) => state.cart);
  const [indexCart, setIndexCart] = useState([]);

  useEffect(() => {
    if (cartProduct.length !== 0) {
      const findIndexCart = cartProduct.findIndex(({ id }) => id == productId);
      setIndexCart(findIndexCart);
    }
  }, [cartProduct, productId]);

  return (
    <div
      className={
        isOpenVarianProduct
          ? 'w-full h-[60dvh] fixed bottom-0  flex flex-col gap-y-3   bg-white duration-300  translate-y-0 overflow-y-scroll z-50'
          : 'w-full h-[60dvh] fixed bottom-0  flex flex-col gap-y-3   bg-white duration-300  translate-y-full overflow-y-scroll z-50'
      }
    >
      <div className="sticky top-0 flex gap-x-4 pt-3 px-3 py-2 bg-white z-50">
        <FontAwesomeIcon icon={faXmark} size="2xl" onClick={() => setIsOpenVarianProduct(!isOpenVarianProduct)} />
        <h5 className="font-bold text-2xl">Varian Product</h5>
      </div>
      <div className="w-full px-3 mt-4">
        <div className="flex items-center gap-x-4 ">
          <div className="w-[40%] h-40 border border-gray-600 rounded-md">
            <img src={imageProduct} alt="img-product" className="w-full h-full object-contain" />
          </div>
          <div className="py-1">
            <span className="font-bold text-xl">${price}</span>
            <br />
            <span>Stok :{cartProduct[indexCart]?.quantity != undefined ? cartProduct[indexCart]?.stock : stockProduct}</span>
          </div>
        </div>
        {filterVarianProduct[0]?.warna != undefined && (
          <div className="flex flex-col gap-y-5 mt-10">
            <h5 className="font-bold text-xl">Warna:</h5>
            <div className={`grid grid-cols-[repeat(auto-fit,minmax(100px,max-content))] gap-x-2 `}>
              {filterVarianProduct[0]?.warna.map((data, index) => {
                return (
                  <span key={index} className="border border-gray-500 px-2 rounded-md text-gray-700 text-xl text-center ">
                    {data}
                  </span>
                );
              })}
            </div>
          </div>
        )}
        {filterVarianProduct[0]?.size != undefined && (
          <div className="flex flex-col gap-y-5 mt-10 mb-6">
            <h5 className="font-bold text-xl">Ukuran:</h5>
            <div className="flex gap-x-2 ">
              {filterVarianProduct[0]?.size.map((data, index) => {
                return (
                  <span key={index} className="border border-gray-500 px-2 rounded-md text-gray-700 text-xl ">
                    {data}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <NavbarOnProductDetail style={'w-full flex items-center px-2 bg-white gap-x-2 sticky bottom-2 z-50'} handleClick={handleClick} />
    </div>
  );
};

export default VarianProduct;
