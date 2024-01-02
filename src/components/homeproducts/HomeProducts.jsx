import React from 'react';
import { fetchData } from '../../utils/fetchData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import CardProducts from '../cardproducts/CardProducts';
import NavbarOnMobile from '../navbaronmobile/NavbarOnMobile';
import Button from '../button/Button';
import Category from '../category/Category';
import { useState } from 'react';
import { useEffect } from 'react';

function HomeProducts() {
  const { data, loading } = fetchData('https://fakestoreapi.com/products');

  return (
    <>
      {screen.width < 500 ? (
        <div className="w-[93%] m-[4px_auto] grid grid-cols-[max-content_max-content] grid-rows-[repeat(2,max-content)] gap-y-3 justify-between  align_items_center">
          <div className="grid grid-cols-[repeat(3,max-content)] gap-x-2">
            <FontAwesomeIcon icon={faLocationDot} />
            <div className="text-sm">
              DiKirim ke <span className="font-bold">Pancoran, Jakarta Selatan</span>
            </div>
          </div>
          {/* Profile user */}
          <div className="flex row-[2] gap-x-2 ">
            <img src="https://images.tokopedia.net/img/home/login_widget/toped_login.png?ect=4g" alt="profile-user" width={40} height={2} />
            <div>
              <p className="font-bold">Hai,Tropper!</p>
              <p>Akses semua fitur, yuk!</p>
            </div>
          </div>
          <Button styleButton={'row-[2] font-bold text-white px-7 py-2 rounded-md bg-green-600'} textButton={'Masuk'} />
          {/* End Profile User */}
        </div>
      ) : null}
      {/* Layout Products */}
      <Category />
      {loading ? <h1 className="text-4xl my-20 text-center">Loading...</h1> : <CardProducts dataProducts={data} urlPath={'/product_detail'} />}
      {screen.width < 500 ? <NavbarOnMobile /> : null}
    </>
  );
}

export default HomeProducts;
