import React from 'react';
import { Link } from 'react-router-dom';
import { faHouse, faArrowTrendUp, faStore } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavbarOnMobile() {
  return (
    <nav className="w-full h-14 grid grid-cols-[repeat(5,1fr)] text-center m-auto bg-white fixed bottom-0 align_items_center z-50">
      <div className="flex flex-col">
        <Link>
          <FontAwesomeIcon icon={faHouse} size="xl" />
          <p className="text-xs">Home</p>
        </Link>
      </div>
      <div className="flex flex-col">
        <Link>
          <FontAwesomeIcon icon={faArrowTrendUp} size="xl" />
          <p className="text-xs">Feed</p>
        </Link>
      </div>
      <div className="flex flex-col">
        <Link>
          <FontAwesomeIcon icon={faStore} size="xl" />
          <p className="text-xs">Official Store</p>
        </Link>
      </div>
      <div className="flex flex-col">
        <Link>
          <FontAwesomeIcon icon={faHeart} size="xl" />
          <p className="text-xs">Wishlist</p>
        </Link>
      </div>
      <div className="flex flex-col">
        <Link>
          <FontAwesomeIcon icon={faNoteSticky} size="xl" />
          <p className="text-xs">Transaksi</p>
        </Link>
      </div>
    </nav>
  );
}

export default NavbarOnMobile;
