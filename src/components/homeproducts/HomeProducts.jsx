import React from 'react';
import { fetchData } from '../../utils/fetchData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import CardProducts from '../cardproducts/CardProducts';
import NavbarOnMobile from '../navbaronmobile/NavbarOnMobile';
import Button from '../button/Button';
import Category from '../category/Category';

function HomeProducts() {
  const { data } = fetchData('https://fakestoreapi.com/products');

  return (
    <>
      {screen.width < 500 ? (
        <div className="w-[93%] m-[4px_auto] grid grid-cols-[max-content_1fr] grid-rows-[repeat(2,max-content)] gap-y-3  align_items_center">
          <div className="grid grid-cols-[repeat(3,max-content)] gap-x-2 ">
            <FontAwesomeIcon icon={faLocationDot} />
            <div className="text-sm">
              DiKirim ke <span className="font-bold">Pancoran, Jakarta Selatan</span>
            </div>
          </div>
          {/* Profile user */}
          <div className="flex row-[2] gap-x-2 ">
            <img src="https://images.tokopedia.net/img/home/login_widget/toped_login.png?ect=4g" alt="profile-user" width={50} />
            <div>
              <p className="font-bold">Hai,Tropper!</p>
              <p>Akses semua fitur, yuk!</p>
            </div>
          </div>
          <Button textButton={'Masuk'} colorButton={'bg-[#00aa5b]'} />
          {/* End Profile User */}
        </div>
      ) : null}
      {/* Layout Products */}
      <Category />
      <CardProducts dataProducts={data} />
      {screen.width < 500 ? <NavbarOnMobile /> : null}
    </>
  );
}

export default HomeProducts;
