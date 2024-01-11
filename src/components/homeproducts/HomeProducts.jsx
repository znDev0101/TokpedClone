import React, { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCaretDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import CardProducts from '../cardproducts/CardProducts';
import NavbarOnMobile from '../navbaronmobile/NavbarOnMobile';
import Button from '../button/Button';
import Category from '../category/Category';
import ScrollToTop from '../scrolltotop/ScrollToTop';
import { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import { useOutletContext } from 'react-router';

function HomeProducts() {
  const { data, loading } = useFetch('https://fakestoreapi.com/products');
  const [scrollPositionY, setScrollPositionY] = useState(null);

  const contextValue = useContext(MyContext);

  const [modal, setModal] = useOutletContext();

  useEffect(() => {
    function getScrollPositionY() {
      setScrollPositionY(window.scrollY);
    }
    window.addEventListener('scroll', getScrollPositionY);
    return () => {
      removeEventListener('scroll', getScrollPositionY);
    };
  }, [window.scrollY]);

  return (
    <>
      {modal ? (
        <div className="w-[90%] top-20  bottom-0 right-0 left-5 max-h-96 bg-green-600 absolute p-2 rounded-xl">
          <div className="absolute top-0 right-0 bg-red-400 px-1 rounded-lg" onClick={() => setModal(!modal)}>
            <FontAwesomeIcon icon={faXmark} size="2xl" className="text-white" />
          </div>
          <p className="text-white font-bold text-center mt-[50%]">Masih tahap development dan masih banyak bug</p>
        </div>
      ) : null}
      {screen.width < 500 ? (
        <div className="w-[92%] m-auto">
          <div className=" items-center flex gap-x-2">
            <FontAwesomeIcon icon={faLocationDot} size="lg" className="text-green-600" />
            <div className="text-sm">
              Dikirim ke <span className="font-bold">Pancoran, Jakarta Selatan</span>
            </div>
            <FontAwesomeIcon icon={faCaretDown} size="lg" />
          </div>
          <div className="grid grid-cols-[2fr_1fr] mt-3 items-center">
            <div className="flex gap-x-2 items-center">
              <img src="https://images.tokopedia.net/img/home/login_widget/toped_login.png?ect=3g" alt="profile-img" className="w-9 h-10" />
              <div>
                <p className="font-bold">Hai,Tropper!</p>
                <p>Akses semua fitur yuk!</p>
              </div>
            </div>
            <Button styleButton={'text-white ms-5 font-bold py-2 rounded-lg bg-green-600 justfiy-end'} textButton={'Masuk'} />
          </div>
        </div>
      ) : null}
      {/* Layout Products */}
      <Category />
      {loading ? <h1 className="text-4xl my-20 text-center">Loading...</h1> : <CardProducts dataProducts={data} urlPath={'/product_detail'} />}
      {scrollPositionY > 500 ? <>{!contextValue ? <ScrollToTop style={'fixed w-12 justify-center items-center flex h-12 bottom-20 right-6  rounded-full shadow-lg bg-white  z-42'} onClick={() => window.scrollTo(0, 0)} /> : null}</> : null}
      {screen.width < 500 ? <>{!contextValue ? <NavbarOnMobile /> : null}</> : null}
    </>
  );
}

export default HomeProducts;
