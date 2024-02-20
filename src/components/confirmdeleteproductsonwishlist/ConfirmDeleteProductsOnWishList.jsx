import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ConfirmDeleteProductsOnWishList = ({ showModal, setShowModal }) => {
  const { checkBoxWishListBoolean } = useSelector((state) => state.wishList);
  const [itemSelected, setItemSelected] = useState(0);

  useEffect(() => {
    const checkBoxWishListBooleanTrue = checkBoxWishListBoolean.filter(({ boolean }) => boolean === true);
    setItemSelected(checkBoxWishListBooleanTrue.length);
  }, [checkBoxWishListBoolean]);

  return (
    <div className="w-full fixed bottom-0">
      <div className="px-5 py-1">
        <button
          className={itemSelected === 0 ? 'w-full bg-gray-300 text-gray-500 font-bold rounded-xl py-2' : 'w-full bg-green-600 text-white font-bold rounded-xl py-2'}
          onClick={() => setShowModal(!showModal)}
          disabled={itemSelected === 0}
        >
          {itemSelected !== 0 ? `Hapus ${itemSelected}` : `Hapus`}
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteProductsOnWishList;
