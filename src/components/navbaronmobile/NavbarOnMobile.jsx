import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { faHouse, faArrowTrendUp, faStore } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular, faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavbarOnMobile() {
  const { pathname } = useLocation();

  return (
    <nav className="w-full h-14 grid grid-cols-[repeat(5,1fr)] text-center m-auto bg-white fixed bottom-0 align_items_center z-50">
      <div className="flex flex-col">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? 'green' : 'black',
            };
          }}
        >
          <FontAwesomeIcon icon={faHouse} size="xl" />
          <p className="text-xs text-black">Home</p>
        </NavLink>
      </div>
      <div className="flex flex-col">
        <NavLink>
          <FontAwesomeIcon icon={faArrowTrendUp} size="xl" />
          <p className="text-xs text-black">Feed</p>
        </NavLink>
      </div>
      <div className="flex flex-col">
        <NavLink>
          <FontAwesomeIcon icon={faStore} size="xl" />
          <p className="text-xs text-black">Official Store</p>
        </NavLink>
      </div>
      <div className="flex flex-col">
        <NavLink
          to="/wishlist"
          style={({ isActive }) => {
            return {
              color: isActive ? 'green' : 'black',
            };
          }}
        >
          {pathname === '/wishlist' ? <FontAwesomeIcon icon={faHeartSolid} size="xl" /> : <FontAwesomeIcon icon={faHeartRegular} size="xl" />}
          <p className="text-xs text-black">Wishlist</p>
        </NavLink>
      </div>
      <div className="flex flex-col">
        <NavLink>
          <FontAwesomeIcon icon={faNoteSticky} size="xl" />
          <p className="text-xs text-black">Transaksi</p>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavbarOnMobile;
