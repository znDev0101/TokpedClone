import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faHome, faShop, faUser, faCircleInfo, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky, faStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const MainMenu = ({ isOpenMainMenu, setIsOpenMainMenu, pathname }) => {
  return (
    <div className={isOpenMainMenu ? `w-full absolute top-0 bottom-0 left-0 right-0 h-screen bg-white z-50 duration-300 translate-y-0` : `w-full absolute top-0 bottom-0 left-0 right-0 h-screen  bg-white z-50 duration-300 translate-y-full`}>
      <div className="w-full pt-3 flex gap-x-5 items-center px-5">
        <FontAwesomeIcon icon={faXmark} size="2xl" onClick={() => setIsOpenMainMenu(!isOpenMainMenu)} />
        <h1 className="text-lg font-bold">Menu Utama</h1>
      </div>
      <div className="m-auto grid grid-rows-2 grid-cols-[repeat(2,1fr)] gap-x-2 px-5">
        <Link className="row-[2] col-[1/2]" to="/login" onClick={() => setIsOpenMainMenu(false)}>
          <Button styleButton={' w-full bg-green-600 font-bold text-white py-1 rounded-lg'} textButton={'Masuk'} />
        </Link>
        <Button styleButton={'row-[2] col-[2] w-full bg-white border border-2 border-green-600 font-bold text-green-600 py-1 rounded-lg'} textButton={'Daftar'} />
      </div>
      {pathname !== '/' ? (
        <div className="mt-5 px-5">
          <Link to="/" className="row-[3] col-[1]" onClick={() => setIsOpenMainMenu(!isOpenMainMenu)}>
            <FontAwesomeIcon icon={faHome} size="lg" />
            <span className="ms-3 text-md">Kembali ke Home</span>
          </Link>
        </div>
      ) : null}

      <div className="w-full mt-5 border-[5px] border-gray-200"></div>
      <nav className="mt-4 px-5">
        <ul className="flex flex-col align-middle gap-y-8">
          <li>
            <Link className="flex gap-x-3 items-center">
              <FontAwesomeIcon icon={faNoteSticky} size="lg" />
              <span className="text-md">Daftar Transaksi</span>
            </Link>
          </li>
          <li>
            <Link className="flex gap-x-3 items-center">
              <FontAwesomeIcon icon={faStar} size="lg" />
              <span className="text-md">Ulasan</span>
            </Link>
          </li>
          <li>
            <Link className="flex gap-x-3 items-center">
              <FontAwesomeIcon icon={faHeart} size="lg" />
              <span className="text-md">Wishlist</span>
            </Link>
          </li>
          <li>
            <Link className="flex gap-x-3 items-center">
              <FontAwesomeIcon icon={faShop} size="lg" />
              <span>Toko yang di-follow</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-full mt-5 border-[5px] border-gray-100"></div>
      <nav className="mt-5 px-5">
        <ul className="flex flex-col gap-y-8">
          <li>
            <Link className="flex gap-x-3 items-center">
              <FontAwesomeIcon icon={faUser} size="lg" />
              <span className="text-md">Pesanan Dikomplain</span>
            </Link>
          </li>
          <li>
            <Link className="flex gap-x-3 items-center">
              <FontAwesomeIcon icon={faCircleInfo} size="lg" />
              <span className="text-md">Bantuan</span>
            </Link>
          </li>
          <li>
            <Link className="flex gap-x-3 items-center">
              <FontAwesomeIcon icon={faQrcode} size="lg" />
              <span className="text-md">Scan Kode QR</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
