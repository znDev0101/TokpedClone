import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import { useDebounce } from '../../hooks/useDebounce';
import { useFetch } from '../../hooks/useFetch';
import { useEffect } from 'react';
function Navbar({ setIsActive }) {
  const [seacrhKeyword, setSeacrhKeyword] = useState('');
  const [resultSearch, setResultSearch] = useState([]);

  const contextValue = useContext(MyContext);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { data } = useFetch(`https://fakestoreapi.com/products`);

  const valueDebounce = useDebounce(seacrhKeyword);

  useEffect(() => {
    if (valueDebounce.length !== 0) {
      const result = data.filter(({ title }) => title.toLowerCase().includes(seacrhKeyword.toLowerCase()));
      setResultSearch(result);
    }
  }, [valueDebounce]);

  function handleClickSearchInput() {
    if (pathname === '/') {
      setIsActive(!contextValue);
    }
  }

  return (
    <>
      <header className="w-full bg-white fixed top-0 grid grid-rows-[2rem] py-3">
        {/* Navbar One */}
        {screen.width < 500 ? (
          <div
            className={
              contextValue
                ? `w-[90%] m-auto grid grid-cols-[max-content_2fr] items-center  gap-x-5`
                : pathname !== '/'
                ? `w-[95%] m-auto grid grid-cols-[max-content_2fr_1fr] items-center gap-x-4`
                : `w-[95%] m-auto grid grid-cols-[2fr_1fr] align_items_center gap-x-5  justify-between`
            }
          >
            {contextValue || pathname !== '/' ? <FontAwesomeIcon icon={faArrowLeft} size="xl" onClick={contextValue ? () => setIsActive(!contextValue) : () => navigate(-1)} /> : null}
            <div className="w-full relative border border-gray-700 rounded-md">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="p-2" />
              <input
                type="text"
                className="border-none outline-none absolute top-0 bottom-0 right-1 left-8"
                value={seacrhKeyword}
                placeholder="Cari di Tokopedia"
                onClick={handleClickSearchInput}
                onChange={(e) => setSeacrhKeyword(e.target.value)}
              />
            </div>
            {!contextValue ? (
              <nav className="w-full">
                <ul className="grid grid-cols-[repeat(4,max-content)] gap-x-4 justify-end">
                  <li>
                    <Link>
                      <FontAwesomeIcon icon={faEnvelope} size="xl"></FontAwesomeIcon>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FontAwesomeIcon icon={faBell} size="xl"></FontAwesomeIcon>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FontAwesomeIcon icon={faCartShopping} size="xl"></FontAwesomeIcon>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FontAwesomeIcon icon={faBars} size="xl"></FontAwesomeIcon>
                    </Link>
                  </li>
                </ul>
              </nav>
            ) : null}
          </div>
        ) : null}

        {/* End Navbar one */}
      </header>
      {contextValue ? (
        <div className="fixed top-[-4px] w-[100%] h-[100vh] mt-14 z-50 bg-white">
          <h5 className="font-bold text-lg mt-10 mx-3">Paling popular</h5>
          {seacrhKeyword.length === 0 ? (
            <div className="flex gap-x-4 mt-3 mx-4">
              <Link to="/products/category/electronics">
                <span className="border border-green-700 text-green-700 py-1 px-5 rounded-lg font-bold">electronics</span>
              </Link>
              <Link>
                <span className="border border-green-700 text-green-700 py-1 px-5 rounded-lg font-bold">men's clothing</span>
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
