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
import { useNavigate, useOutletContext } from 'react-router';
import SliderImages from '../sliderimages/SliderImages';

function HomeProducts() {
  const { data, loading } = useFetch('https://fakestoreapi.com/products');
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [arrowToTop, setArrowToTop] = useState(false);
  const navigate = useNavigate();

  const { isActive } = useContext(MyContext);

  useEffect(() => {
    const getScrollY = () => {
      setWindowScrollY(window.scrollY);
      if (window.scrollY < windowScrollY) {
        setArrowToTop(true);
      } else {
        setArrowToTop(false);
      }
    };

    window.addEventListener('scroll', getScrollY);
    return () => {
      removeEventListener('scroll', getScrollY);
    };
  }, [windowScrollY]);

  return (
    <>
      {screen.width < 500 ? (
        <div className={`w-[92%] m-auto`}>
          <div className="items-center flex gap-x-2">
            <FontAwesomeIcon icon={faLocationDot} size="lg" className="text-green-600" />
            <div className="text-sm">
              Dikirim ke <span className="font-bold">Pancoran, Jakarta Selatan</span>
            </div>
            <FontAwesomeIcon icon={faCaretDown} size="lg" />
          </div>
          <div className=" grid grid-cols-[2fr_1fr] mt-3 items-center">
            <div className="flex gap-x-2 items-center">
              <img src="https://images.tokopedia.net/img/home/login_widget/toped_login.png?ect=3g" alt="profile-img" className="w-9 h-10" />
              <div>
                <p className="font-bold">Hai,Tropper!</p>
                <p>Akses semua fitur yuk!</p>
              </div>
            </div>
            <Button styleButton={' text-white ms-5 font-bold py-2 rounded-lg bg-green-600 '} textButton={'Masuk'} handleClick={() => navigate('/login')} />
          </div>
        </div>
      ) : null}
      {/* <SliderImages /> */}
      {/* Layout Products */}
      <Category />
      {loading ? <h1 className="text-4xl my-20 text-center">Loading...</h1> : <CardProducts dataProducts={data} urlPath={'/product_detail'} />}
      {windowScrollY > 400 ? (
        <>
          {!isActive ? (
            <ScrollToTop
              style={
                arrowToTop
                  ? 'fixed w-12 justify-center items-center flex h-12 bottom-20 right-6 rounded-full shadow-lg bg-white z-50 duration-300 translate-y-0 '
                  : 'fixed w-12 justify-center items-center flex h-12 bottom-0 right-6 rounded-full shadow-lg bg-white duration-300 translate-y-full'
              }
              onClick={() => window.scrollTo(0, 0)}
            />
          ) : null}
        </>
      ) : null}
      {screen.width < 500 ? <>{!isActive ? <NavbarOnMobile /> : null}</> : null}
    </>
  );
}

export default HomeProducts;
