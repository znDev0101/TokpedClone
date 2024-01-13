import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CardProducts({ dataProducts, urlPath }) {
  const { pathname } = useLocation();

  return (
    <div className={pathname !== '/' ? `w-[93%] m-[70px_auto]` : `w-[93%] mx-auto mt-4 mb-20`}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
        {dataProducts.map(({ id, category, title, image, price, rating }) => {
          return (
            <Link to={`${urlPath}/${id}`} key={id}>
              <div className="w-full grid grid-rows-[17rem_1.2rem_1.2rem_1.2rem] border-2 border-gray-300 rounded-md shadow-md gap-y-2 pb-3">
                <div className="w-full h-full flex items-center overflow-hidden pt-8 px-3 m-auto">
                  <img src={image} alt="image-product" className="object-cover" />
                </div>
                <h5 className="px-2 h-5 overflow-hidden">{title.slice(0, 17)}</h5>
                <h5 className="px-2 font-bold">{price}</h5>
                <div className="flex items-center gap-x-2 ms-2">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                  <span className="text-gray-600">{rating?.rate}</span>
                  <span className="text-gray-600">|</span>
                  <span className="text-gray-600">Terjual 99+</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CardProducts;
