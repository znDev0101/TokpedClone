import React, { useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import NavbarOnMobile from '../components/navbaronmobile/NavbarOnMobile';
import { useState } from 'react';
import { MyContext } from '../context/MyContext';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

function Root() {
  const [isActive, setIsActive] = useState(false);
  const [isOpenMainMenu, setIsOpenMainMenu] = useState(false);
  const [aturWishList, setAturWishList] = useState(false);
  const [urlPath, setUrlPath] = useState([]);
  const { pathname } = useLocation();
  const { productId } = useParams();
  const { checkBoxWishListBoolean } = useSelector((state) => state.wishList);

  return (
    <MyContext.Provider value={{ isActive, isOpenMainMenu, setAturWishList, aturWishList }}>
      <div className="w-full relative overflow-hidden">
        <ToastContainer className="mb-14" />
        <Navbar setIsActive={setIsActive} isOpenMainMenu={isOpenMainMenu} setIsOpenMainMenu={setIsOpenMainMenu} />
        <Outlet context={{ setUrlPath }} />
        {screen.width < 500 && pathname !== '/cart_detail' && pathname !== `/product_detail/${productId}` && pathname !== `/products/category/${urlPath}` && pathname !== '/ulasan_pembeli' ? (
          <>{!isActive && !isOpenMainMenu && !aturWishList ? <NavbarOnMobile /> : null}</>
        ) : null}
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default Root;
