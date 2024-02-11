import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from '../components/button/Button';

const WishList = () => {
  const { wishListProduct } = useSelector((state) => state.wishList);
  const navigate = useNavigate();

  return (
    <>
      {wishListProduct.length === 0 ? (
        <div className="flex flex-col mt-16 px-10 gap-y-3">
          <div className="">
            <img src="https://images.tokopedia.net/img/wishlist/empty-collection-state/1-emptystate.png?ect=4g" alt="img" className="object-cover" />
          </div>
          <h2 className="font-bold text-center text-2xl">Semua Wishlist-mu akan tersimpan disini</h2>
          <p className="text-center">isi Wishlist-mu dengan klik ikon hati waktu nemu barang yang kamu suka.</p>
          <Button styleButton={'bg-green-600 w-[60%] m-auto font-bold text-white py-2 rounded-lg'} textButton={'Cari Barang Impian'} handleClick={() => navigate('/')} />
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default WishList;
