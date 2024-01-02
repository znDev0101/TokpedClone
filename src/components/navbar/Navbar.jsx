import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMagnifyingGlass, faCartShopping, faBars, faLocationDot, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useRef } from 'react';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [seacrhKeyword, setSeacrhKeyword] = useState('');

  const navigate = useNavigate();

  const { pathname } = useLocation();

  function handleClickSearchInput() {
    if (pathname === '/') {
      setIsActive(true);
    }
  }

  return (
    <>
      <header className="w-full bg-white fixed top-0 grid grid-rows-[2rem] p-[0.6rem] ">
        {/* Navbar One */}
        {screen.width < 500 ? (
          <div
            className={
              pathname !== '/'
                ? `grid grid-cols-[max-content_60%_35%]  align_items_center justify-between`
                : isActive
                ? `grid grid-cols-[max-content_92%] align_items_center justify-between gap-x-5`
                : `grid grid-cols-[60%_40%]  align_items_center gap-x-[.7rem]`
            }
          >
            {pathname !== '/' ? <FontAwesomeIcon icon={faArrowLeft} className="m-[0_9px_0_0]" onClick={() => navigate(-1, { replace: true })} /> : null}
            {isActive ? <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={() => setIsActive(false)} /> : null}
            <div className={pathname !== '/' ? `w-[90%] relative flex items-center border border-gray-700  rounded-md px-2` : `w-[96%] relative flex items-center border border-gray-700 rounded-md px-2`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              <input type="text" value={seacrhKeyword} placeholder="Cari di Tokopedia" onClick={handleClickSearchInput} onChange={(e) => setSeacrhKeyword(e.target.value)} className={`border-none outline-none py-2 px-2 rounded-md w-full`} />
            </div>
            {!isActive ? (
              <nav>
                <ul className="grid grid-cols-[repeat(4,1fr)] gap-x-[.8rem]">
                  <li>
                    <Link>
                      <FontAwesomeIcon size="lg" icon={faEnvelope} />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FontAwesomeIcon size="lg" icon={faBell} />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FontAwesomeIcon size="lg" icon={faCartShopping} />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FontAwesomeIcon size="lg" icon={faBars} />
                    </Link>
                  </li>
                </ul>
              </nav>
            ) : null}
          </div>
        ) : null}
        {/* End Navbar one */}
      </header>
      {isActive ? (
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
