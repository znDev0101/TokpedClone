import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faHome, faShop, faUser, faCircleInfo, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky, faStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const MainMenu = ({ isOpenMainMenu, setIsOpenMainMenu, pathname }) => {
  return (
    <>
      {isOpenMainMenu ? (
        <div className="w-full absolute top-0 bottom-0 left-0 right-0 h-screen  bg-white z-50">
          <div className="w-[90%] m-auto grid grid-rows-2 grid-cols-[repeat(2,1fr)] mt-2 gap-y-8 gap-x-2">
            <div className="flex gap-x-5 items-center">
              <FontAwesomeIcon icon={faXmark} size="2xl" onClick={() => setIsOpenMainMenu(!isOpenMainMenu)} />
              <h1 className="text-xl font-bold">Menu Utama</h1>
            </div>
            <Button styleButton={'row-[2] col-[1/2] w-full bg-green-600 font-bold text-white py-1 rounded-lg'} textButton={'Masuk'} />
            <Button styleButton={'row-[2] col-[2] w-full bg-white border border-2 border-green-600 font-bold text-green-600 py-1 rounded-lg'} textButton={'Daftar'} />
          </div>
          {pathname !== '/' ? (
            <div className="mt-5 ms-5">
              <Link to="/" className="row-[3] col-[1]" onClick={() => setIsOpenMainMenu(!isOpenMainMenu)}>
                <FontAwesomeIcon icon={faHome} size="lg" />
                <span className="ms-3 text-lg">Kembali ke Home</span>
              </Link>
            </div>
          ) : null}
          <div className="w-full mt-5 border-[5px] border-gray-100"></div>
          <nav className="w-[90%] m-[20px_auto]">
            <ul className="flex flex-col gap-y-8">
              <li>
                <Link className="flex gap-x-3 items-center">
                  <FontAwesomeIcon icon={faNoteSticky} size="xl" />
                  <span className="text-lg">Daftar Transaksi</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-x-3 items-center">
                  <FontAwesomeIcon icon={faStar} size="xl" />
                  <span className="text-lg">Ulasan</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-x-3 items-center">
                  <FontAwesomeIcon icon={faHeart} size="xl" />
                  <span className="text-lg">Wishlist</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-x-3 items-center">
                  <FontAwesomeIcon icon={faShop} size="xl" />
                  <span>Toko yang di-follow</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="w-full mt-5 border-[5px] border-gray-100"></div>
          <nav className="w-[90%] m-[20pt_auto]">
            <ul className="flex flex-col gap-y-8">
              <li>
                <Link className="flex gap-x-3 items-center">
                  <FontAwesomeIcon icon={faUser} size="xl" />
                  <span className="text-lg">Pesanan Dikomplain</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-x-3 items-center">
                  <FontAwesomeIcon icon={faCircleInfo} size="xl" />
                  <span className="text-lg">Bantuan</span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-x-3 items-center">
                  <FontAwesomeIcon icon={faQrcode} size="xl" />
                  <span className="text-lg">Scan Kode QR</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
};

export default MainMenu;
