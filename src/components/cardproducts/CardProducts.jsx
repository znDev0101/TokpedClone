import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CardProducts({ dataProducts, urlPath }) {
  return (
    <div className={`w-[93%] m-[20px_auto]`}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
        {dataProducts.map(({ id, category, title, image, price, rating }) => {
          return (
            <Link to={`${urlPath}/${id}`}>
              <div className="w-full grid  grid-rows-[13rem_1rem_.5rem] h-[350px] shadow-2xl  align_items_center rounded-md pt-5 p-2 gap-y-5" key={id}>
                <div className="object-cover m-auto">
                  <img src={image} alt="image-products" className="w-[120px] m-auto object-cover" />
                </div>
                <div className="h-[50px] overflow-hidden">
                  <h5>{title}</h5>
                </div>
                <div className="mt-4">
                  <p>{price}</p>
                </div>
                <div className="flex  text-gray-500 gap-x-[.2rem] items-center">
                  <div className="">
                    <FontAwesomeIcon icon={faStar} className={'text-yellow-300'} />
                  </div>
                  <div className="">{rating.rate}</div>
                  <div className="">|</div>
                  <div className="">99+ Terjual</div>
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
