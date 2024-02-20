import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../../context/MyContext';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckBoxBooleanWishList } from '../../redux/wishlistSlice/wishListSlice';

function CardProducts({ category, title, image, price, rating, urlPath, id }) {
  const { aturWishList } = useContext(MyContext);
  const { checkBoxWishListBoolean } = useSelector((state) => state.wishList);
  const [indexCheckBoxBoolean, setIndexCheckBoxBoolean] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const findIndexCheckBoxBoolean = checkBoxWishListBoolean.findIndex((data) => data.id == id);
    setIndexCheckBoxBoolean(findIndexCheckBoxBoolean);

    return () => {};
  }, [checkBoxWishListBoolean]);

  return (
    <>
      {aturWishList ? (
        <div className="w-full relative  grid grid-rows-[17rem_1.2rem_1.2rem_1.2rem] border-2 border-gray-300 rounded-md shadow-md gap-y-2 pb-3">
          <div className="w-8 h-8 border border-gray-500 absolute right-3 top-2">
            <input type="checkbox" checked={checkBoxWishListBoolean[indexCheckBoxBoolean]?.boolean} onChange={() => dispatch(setCheckBoxBooleanWishList({ id }))} className="w-full h-full" />
          </div>
          <div className="w-full h-full flex items-center overflow-hidden pt-8 px-3 m-auto">
            <img src={image} alt="image-product" className="object-cover" />
          </div>
          <h5 className="px-2 h-5 overflow-hidden">{title.slice(0, 17)}</h5>
          <h5 className="px-2 font-bold">{price}</h5>
          <div className="flex items-center gap-x-2 ms-2">
            <span className="text-gray-600">{rating?.rate}</span>
            <span className="text-gray-600">|</span>
            <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
            <span className="text-gray-600">Terjual 99+</span>
          </div>
        </div>
      ) : (
        <Link to={`${urlPath}/${id}`}>
          <div className="w-full  grid grid-rows-[17rem_1.2rem_1.2rem_1.2rem] border-2 border-gray-300 rounded-md shadow-md gap-y-2 pb-3">
            <div className="w-full h-full flex items-center overflow-hidden pt-8 px-3 m-auto">
              <img src={image} alt="image-product" className="object-cover" />
            </div>
            <h5 className="px-2 h-5 overflow-hidden">{title.slice(0, 17)}</h5>
            <h5 className="px-2 font-bold">{price}</h5>
            <div className="flex items-center gap-x-2 ms-2">
              <span className="text-gray-600">{rating?.rate}</span>
              <span className="text-gray-600">|</span>
              <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
              <span className="text-gray-600">Terjual 99+</span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default CardProducts;
