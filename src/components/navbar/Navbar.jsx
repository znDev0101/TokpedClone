import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMagnifyingGlass, faCartShopping, faBars, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import SearchBarHeader from '../searchBarHeader/SearchBarHeader';
import ButtonPrimary from '../../components/button/Button';

function Navbar() {
  return (
    <header className="w-full bg-white fixed top-0 grid grid-rows-[2rem]  grid-area-nav p-[0.6rem_1rem] ">
      {/* Navbar One */}
      {screen.width < 500 ? (
        <div className="grid grid-cols-[60%_40%]  align_items_center gap-x-[.7rem]">
          <div className="w-[96%] relative ">
            <input type="text" placeholder="Cari di Tokopedia" className="py-2 placeholder:px-10 border border-green-700 rounded-md w-full" />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-[0.7rem]" size="lg" />
          </div>
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
        </div>
      ) : null}
      {/* End Navbar one */}
    </header>
  );
}

export default Navbar;
