import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NavbarUlasan = () => {
  return (
    <nav>
      <div className="flex gap-x-3">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    </nav>
  );
};

export default NavbarUlasan;
