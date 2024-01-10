import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
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
              <div className="w-full grid  grid-rows-[13rem_1rem_.5rem] h-[350px] border-solid border-2 border-gray-300 shadow-xl  align_items_center rounded-xl pt-5 p-2 gap-y-5">
                <div className="object-cover m-auto">
                  <img src={image} alt="image-products" className="w-[120px] m-auto object-cover" />
                </div>
                <div className="h-[50px] overflow-hidden">
                  <h5>{title}</h5>
                </div>
                <div className="mt-4">
                  <p className="font-bold">{price}</p>
                </div>
                <div className="flex  text-gray-500 gap-x-[.2rem] items-center">
                  <div className="">
                    <FontAwesomeIcon icon={faStar} className={'text-yellow-300'} />
                  </div>
                  <div className="text-sm">{rating.rate}</div>
                  <div className="text-sm">|</div>
                  <div className="text-sm">99+ Terjual</div>
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
