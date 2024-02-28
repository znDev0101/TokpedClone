import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faCartShopping, faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoTokped from '../../assets/LogoTokped.svg';
import { useSelector } from 'react-redux';

const NavbarOnDekstop = () => {
  const { totalCart } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  return (
    <header className="w-full fixed top-0 z-50">
      {/* nav one */}
      <nav className="flex justify-between px-8 py-1 bg-gray-200">
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faPhone} />
          <span className="text-sm">Download Tokopedia App</span>
        </div>
        <ul className="flex gap-x-9">
          <li>
            <Link className="text-sm">Tentang Tokopedia</Link>
          </li>
          <li>
            <Link className="text-sm">Mitra Tokopedia</Link>
          </li>
          <li>
            <Link className="text-sm">Mulai Berjualan</Link>
          </li>
          <li>
            <Link className="text-sm">Promo</Link>
          </li>
          <li>
            <Link className="text-sm">Tokopedia Care</Link>
          </li>
        </ul>
      </nav>
      <nav className="grid grid-cols-[1fr_5fr_1fr] grid-rows-[repeat(2,max-content)] gap-x-10 items-center px-8 py-2  bg-white">
        <Link to="/">
          <img src={LogoTokped} alt="img-tokopedia" className="object-contain" />
        </Link>
        <div className="w-full flex gap-x-4 items-center ">
          <span>Kategori</span>
          <div className="w-full h-10 flex items-center border gap-x-3 border-gray-200 rounded-md">
            <FontAwesomeIcon icon={faMagnifyingGlass} className=" text-gray-400 ms-3" size="lg" />
            <div className="flex flex-col">
              <input type="text" className="w-[90%] h-full placeholder:text-gray-500 focus:outline-none" placeholder="Cari di Tokopedia" />
            </div>
          </div>
        </div>
        <div className="flex text-center items-center gap-x-10">
          <div className="relative">
            <FontAwesomeIcon icon={faCartShopping} onClick={() => navigate('/cart_detail')} />
            <span className="absolute w-max h-max bottom-4 -right-3 text-center rounded-full text-sm bg-green-600 text-white font-bold px-[.4rem]">{totalCart !== 0 && totalCart}</span>
          </div>
          <span>|</span>
          <div className="flex items-center gap-x-3">
            <button className="text-green-600 font-bold bg-white border border-green-600 py-1 px-3 rounded-md">Masuk</button>
            <Link className="text-white font-bold bg-green-600 border border-green-600 py-1 px-3 rounded-md">Daftar</Link>
          </div>
        </div>
        <ul className="ms-20 mt-2 flex gap-x-5 col-[2/3] row-[2]">
          <li>
            <Link to="/products/category/electronics" className="text-sm text-gray-600">
              Electronics
            </Link>
          </li>
          <li>
            <Link to="/products/category/mens_clothing" className="text-sm text-gray-600">
              Men's Clothing
            </Link>
          </li>
          <li>
            <Link to="/products/category/womens_clothing" className="text-sm text-gray-600">
              Women's Clothing
            </Link>
          </li>
          <li>
            <Link to="/products/category/jewelery" className="text-sm text-gray-600">
              Jewerlly
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarOnDekstop;
