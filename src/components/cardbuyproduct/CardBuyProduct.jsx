import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const CardBuyProduct = ({ stock, price }) => {
  const handleDecrement = () => {};

  const handleIncrement = () => {};

  return (
    <div className="w-full h-max sticky top-32 right-0 row-[1] max-w-[260px] bg-white border border-gray-300 rounded-md pb-2 ">
      <h1 className="font-bold ps-4 pt-3">Atur Jumlah dan Catatan</h1>
      {/* counter cart */}
      <div className="flex items-center mt-4 ps-4 gap-x-4">
        <div className="flex justify-center items-center border border-gray-300 rounded-lg px-1 py-1 gap-x-2">
          <button onClick={handleDecrement} className="text-green-600 text-lg hover:bg-gray-100 px-2">
            <FontAwesomeIcon icon={faMinus} size="xs" />
          </button>
          <span>1</span>
          <button onClick={handleIncrement} className="text-green-600 text-lg hover:bg-gray-100 px-2">
            <FontAwesomeIcon icon={faPlus} size="xs" />
          </button>
        </div>
        <span>
          Stok: <span className="font-bold">{stock}</span>
        </span>
      </div>
      <div className="flex justify-between px-3 mt-5 items-center">
        <span>Subtotal</span>
        <span className="font-bold">${price}</span>
      </div>
      <div className="w-full flex flex-col gap-y-2 px-2">
        <button className="bg-green-500 font-bold text-white py-1 rounded-md">Keranjang</button>
        <button className="bg-white font-bold text-green-500 border border-green-500 py-1 rounded-md">Beli</button>
      </div>
    </div>
  );
};

export default CardBuyProduct;
