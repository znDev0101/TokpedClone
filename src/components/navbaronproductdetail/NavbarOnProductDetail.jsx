import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import Button from '../button/Button';

function NavbarOnProductDetail() {
  return (
    <div className="w-full bg-white grid grid-cols-[max-content_1fr_1fr] fixed bottom-0 px-2 py-2 gap-x-2 items-center z-50">
      <div>
        <FontAwesomeIcon icon={faMessage} size="2xl" />
      </div>
      <div className="">
        <Button textButton={'Beli'} styleButton={'w-full font-bold text-green-500 border-solid border-2 py-[.35rem] rounded-md border-green-500'} />
      </div>
      <div className="">
        <Button textButton={'+Keranjang'} styleButton={'w-full font-bold text-white py-2 bg-green-500 rounded-md'} />
      </div>
    </div>
  );
}

export default NavbarOnProductDetail;
