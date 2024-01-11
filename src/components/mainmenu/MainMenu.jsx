import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faHome } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const MainMenu = ({ isOpenMainMenu, setIsOpenMainMenu, pathname }) => {
  return (
    <>
      {isOpenMainMenu ? (
        <div className="w-full absolute top-0 bottom-0 left-0 right-0 h-screen  bg-white z-50">
          <div className="w-[90%] m-auto grid grid-rows-2 grid-cols-[max-content_1fr] mt-4 gap-y-8 gap-x-2">
            <div className="flex gap-x-5 items-center">
              <FontAwesomeIcon icon={faXmark} size="2xl" onClick={() => setIsOpenMainMenu(!isOpenMainMenu)} />
              <h1 className="text-xl font-bold">Menu Utama</h1>
            </div>
            <Button styleButton={'row-[2] col-[1/2] w-full bg-green-600 font-bold text-white py-1 rounded-lg'} textButton={'Masuk'} />
            <Button styleButton={'row-[2]  col-[2] bg-white border border-2 border-green-600 font-bold text-green-600 py-1 rounded-lg'} textButton={'Daftar'} />

            <Link to="/" className="row-[3] col-[1]">
              <FontAwesomeIcon icon={faHome} size="lg" />
              <span className="ms-5 text-lg">Kembali ke Home</span>
            </Link>
          </div>

          <div className="w-full mt-5 border-[5px] border-gray-100"></div>
          <nav className="w-[90%] m-[20px_auto]">
            <ul className="flex flex-col gap-y-4">
              <li>
                <Link className="flex gap-x-5 items-center">
                  <FontAwesomeIcon icon={faNoteSticky} size="xl" />
                  <span className="text-lg">Daftar Transaksi</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-x-5">test</Link>
              </li>
              <li>
                <Link className="flex gap-x-5">test</Link>
              </li>
              <li>
                <Link className="flex gap-x-5">test</Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
};

export default MainMenu;
