import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CardOthersProducts({ image, title, price, rating }) {
  return (
    <div className="w-48 h-[23rem] me-3 inline-block shadow-2xl border border-gray-400 px-2 rounded-xl">
      <div className="w-40 h-40 m-[40px_auto] flex items-center">
        <img src={image} alt="product-image" className="object-cover" />
      </div>
      <div className="w-full h-12 overflow-y-hidden whitespace-normal">
        <p>{title}</p>
      </div>
      <div className="w-full mt-2">
        <p>{price}</p>
      </div>
      <div className="flex mt-2 items-center gap-x-1">
        <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
        <p className="text-gray-500">{rating?.rate}</p>
        <span>|</span>
        <p className="text-gray-500">Terjual 999+</p>
      </div>
    </div>
  );
}

export default CardOthersProducts;
