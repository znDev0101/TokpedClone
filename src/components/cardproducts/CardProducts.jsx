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
              <div className="w-full grid  grid-rows-[18rem_2rem] h-[365px] border-solid border-2 border-gray-300 shadow-xl  align_items_center rounded-xl gap-y-2">
                <div className="w-full h-60 m-auto flex items-center overflow-hidden px-3">
                  <img src={image} alt="image-products" className="object-cover bg-cover" />
                </div>
                <div className="flex flex-col gap-y-1 ms-1">
                  <h5>{title.slice(0, 19)}</h5>
                  <p className="font-bold">{price}</p>
                  <div className="flex  text-gray-500 gap-x-[.2rem] items-center">
                    <div className="">
                      <FontAwesomeIcon icon={faStar} className={'text-yellow-300'} />
                    </div>
                    <div className="text-sm">{rating.rate}</div>
                    <div className="text-sm">|</div>
                    <div className="text-sm">99+ Terjual</div>
                  </div>
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
