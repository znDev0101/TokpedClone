import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import NavbarOnProductDetail from '../navbaronproductdetail/NavbarOnProductDetail';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const VarianProduct = ({ filterVarianProduct, productId, isOpenVarianProduct, setIsOpenVarianProduct, imageProduct, price, handleClick }) => {
  const { cartProduct } = useSelector((state) => state.cart);
  return (
    <div
      className={
        isOpenVarianProduct
          ? 'w-full h-[65vh] fixed bottom-0 bg-white border-2 border-green-600 rounded-t-xl z-40 mt-52 duration-300 translate-y-0'
          : 'w-full h-[65vh] fixed  bottom-0 bg-white border-2 border-green-600 rounded-t-xl z-40 mt-52 duration-300 translate-y-full'
      }
    >
      <div className="flex px-5 gap-x-5 mt-4">
        <FontAwesomeIcon icon={faXmark} size="2xl" onClick={() => setIsOpenVarianProduct(false)} />
        <h5 className="font-bold text-xl">Varian Prouduct</h5>
      </div>
      <div className="flex ms-5 mt-5 gap-x-2 items-center">
        <div className="w-40 h-40  border border-gray-400 rounded-md">
          <img src={imageProduct} alt="imageProduct" className=" w-full h-full object-contain" />
        </div>
        <div className="flex flex-col">
          <h5 className="font-bold text-lg">{price}</h5>
          {filterVarianProduct.map(({ id }) => {
            return (
              <div key={id}>
                <p>{cartProduct[2]?.stock}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="w-full border border-gray-200 mt-6" />
      {filterVarianProduct[0]?.category == "men's clothing" || filterVarianProduct[0]?.category == "women's clothing" ? <h3 className="font-bold text-xl py-5 px-5">Warna:</h3> : <h3 className="font-bold text-xl py-5 px-5">Storage</h3>}
      {filterVarianProduct[0]?.category == "men's clothing" || filterVarianProduct[0]?.category == "women's clothing" ? (
        <>
          <div className="flex px-5 gap-x-5">
            {filterVarianProduct[0]?.warna.map((data, index) => {
              return (
                <div className="border border-gray-200 p-1" key={index}>
                  <p>{data}</p>
                </div>
              );
            })}
          </div>
          {filterVarianProduct[0].hasOwnProperty('size') ? (
            <>
              <h3 className="font-bold text-xl py-5 px-5">Ukuran:</h3>
              <div className="flex px-5 gap-x-3">
                {filterVarianProduct[0]?.size.map((data, index) => {
                  return (
                    <div className="border border-gray-200" key={index}>
                      <p>{data}</p>
                    </div>
                  );
                })}
              </div>
            </>
          ) : null}
        </>
      ) : (
        <div className="flex px-5">
          {filterVarianProduct[0]?.storage.map((data) => {
            return <p className="p-1 border border-gray-200 rounded-md">{data}</p>;
          })}
        </div>
      )}
      <NavbarOnProductDetail style={'w-full bg-white grid grid-cols-[max-content_1fr_1fr] fixed bottom-0 px-2 py-2 gap-x-2 items-center'} handleClick={handleClick} />
    </div>
  );
};

export default VarianProduct;
