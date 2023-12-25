import React from 'react';
import { faList, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <div className="w-full h-20 grid grid-cols-[repeat(5,1fr)] gap-x-3 m-[40px_0_0_0] px-4 text-center overflow-x-scroll overflow-y-hidden">
      <div className="">
        <FontAwesomeIcon icon={faList} size="2xl" />
        <p>Liat Semua</p>
      </div>
      <Link to={`/products/mens_clothing`}>
        <div className="">
          <FontAwesomeIcon icon={faSuitcase} size="2xl" />
          <p>backpack</p>
        </div>
      </Link>
      <Link to={'/products/jewelery'}>
        <div className="">
          <FontAwesomeIcon icon={faGem} size="2xl" />
          <p>Perhiasan</p>
        </div>
      </Link>
      <Link to={`/products/electronics`}>
        <div className="">
          <FontAwesomeIcon icon={faList} size="2xl" />
          <p>Liat Semua</p>
        </div>
      </Link>
      <Link to={`/products/womens_clothing`}>
        <div className="">
          <FontAwesomeIcon icon={faList} size="2xl" />
          <p>Liat Semua</p>
        </div>
      </Link>
    </div>
  );
}

export default Category;
