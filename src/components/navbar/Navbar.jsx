import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBars, faArrowLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import { useDebounce } from '../../hooks/useDebounce';
import MainMenu from '../mainmenu/MainMenu';

function Navbar({ setIsActive, setIsOpenMainMenu, isOpenMainMenu }) {
  const [seacrhKeyword, setSeacrhKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const { isActive } = useContext(MyContext);
  const [noResult, setNoResult] = useState(false);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const valueDebounce = useDebounce(seacrhKeyword);

  useEffect(() => {
    if (seacrhKeyword.length > 0 && data.length == 0) {
      setNoResult(true);
    } else {
      setNoResult(false);
    }
  }, [data]);

  useEffect(() => {
    if (pathname !== '/') {
      setData([]);
      setSeacrhKeyword('');
    }
  }, [pathname]);

  useEffect(() => {
    if (seacrhKeyword.length === 0) setData([]);
  }, [seacrhKeyword]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        const resultSearch = result.filter(({ title }) => title.toLowerCase().includes(seacrhKeyword.toLowerCase()));

        if (resultSearch.length > 10) {
          const coppyArr = resultSearch.slice(0, 10);
          setData(coppyArr);
          setIsLoading(false);
        } else {
          setData(resultSearch);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (seacrhKeyword.length > 0) getData();
  }, [valueDebounce]);

  return (
    <>
      <header className="w-full bg-white fixed top-0 grid grid-rows-[2rem] py-3 z-40">
        {/* Navbar One */}
        {screen.width < 500 ? (
          <div
            className={
              isActive
                ? `w-[90%] m-auto grid grid-cols-[max-content_2fr] items-center  gap-x-5`
                : pathname !== '/'
                ? `w-[95%] m-auto grid grid-cols-[max-content_2fr_1fr] items-center gap-x-4`
                : `w-[92%] m-auto grid grid-cols-[2fr_1fr] align_items_center gap-x-5  justify-between`
            }
          >
            {isActive || pathname !== '/' ? <FontAwesomeIcon icon={faArrowLeft} size="xl" onClick={isActive ? () => setIsActive(false) : () => navigate(-1)} /> : null}
            <div className="w-full relative border border-gray-700 rounded-md">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="p-2" />
              <input
                type="text"
                className="border-none outline-none absolute top-0 bottom-0 right-1 left-8 placeholder:font-bold "
                value={seacrhKeyword}
                placeholder="Cari di Tokopedia"
                onClick={() => setIsActive(true)}
                onChange={(e) => setSeacrhKeyword(e.target.value)}
              />
            </div>
            {!isActive ? (
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
                    <FontAwesomeIcon icon={faBars} size="xl" onClick={() => setIsOpenMainMenu(!isOpenMainMenu)}></FontAwesomeIcon>
                  </li>
                </ul>
              </nav>
            ) : null}
          </div>
        ) : null}
        <MainMenu isOpenMainMenu={isOpenMainMenu} setIsOpenMainMenu={setIsOpenMainMenu} pathname={pathname} />
        {/* End Navbar one */}
      </header>
      {isActive ? (
        <div className="fixed top-[-4px] w-[100%] h-[100vh] mt-14 pt-5 z-50 bg-white px-5">
          {seacrhKeyword.length > 0 ? (
            isLoading ? (
              <p className="text-2xl text-center mt-8 font-bold">Loading...</p>
            ) : noResult ? (
              <p className="text-2xl mt-20 text-center font-bold">Pencarian tidak di temukan</p>
            ) : (
              data.map(({ title, id }) => {
                return (
                  <div className="w-full grid grid-cols-[max-content_1fr]  items-center mb-5 gap-x-2" key={id}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
                    <Link to={`/product_detail/${id}`} onClick={() => setIsActive(!isActive)} className="grid grid-cols-[1fr_max-content] gap-x-1 items-center">
                      <p>{title.slice(0, 20)}</p>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" />
                    </Link>
                  </div>
                );
              })
            )
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
