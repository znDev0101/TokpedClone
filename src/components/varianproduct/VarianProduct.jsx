import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

const VarianProduct = ({ isOpenVarianProduct, setIsOpenVarianProduct, imageProduct }) => {
  console.log(isOpenVarianProduct);
  return (
    <div
      className={
        isOpenVarianProduct
          ? 'w-full h-[40vh] fixed bottom-0 bg-white border-2 border-green-600 rounded-t-xl z-50 mt-52 duration-300 translate-y-0'
          : 'w-full h-[40vh] fixed  bottom-0 bg-white border-2 border-green-600 rounded-t-xl z-50 mt-52 duration-300 translate-y-full'
      }
    >
      <div className="flex px-5 gap-x-5 mt-4">
        <FontAwesomeIcon icon={faXmark} size="2xl" onClick={() => setIsOpenVarianProduct(false)} />
        <h5 className="font-bold text-xl">Varian Prouduct</h5>
      </div>
      <div className="flex ms-5 mt-5 gap-x-2">
        <div className="w-[35%] h-32  border-2 border-black bg-cover object-cover">
          <img src={imageProduct} alt="imageProduct" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default VarianProduct;
