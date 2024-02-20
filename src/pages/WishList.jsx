import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import Button from '../components/button/Button';
import CardProducts from '../components/cardproducts/CardProducts';
import ConfirmDeleteProductsOnWishList from '../components/confirmdeleteproductsonwishlist/ConfirmDeleteProductsOnWishList';
import Modal from '../components/modal/Modal';
import { removeItemsFromWishList } from '../redux/wishlistSlice/wishListSlice';
import { MyContext } from '../context/MyContext';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishList = () => {
  const { wishListProduct, wishListHeartBoolean, checkBoxWishListBoolean } = useSelector((state) => state.wishList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [itemSelected, setItemSelected] = useState(0);
  const { aturWishList, setAturWishList } = useContext(MyContext);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    dispatch(removeItemsFromWishList());
    setShowModal(!showModal);
    toast.success('Belanjaan kamu berhasil di hapus', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
    setAturWishList(!aturWishList);
  };

  useEffect(() => {
    const checkBoxWishListBooleanTrue = checkBoxWishListBoolean.filter(({ boolean }) => boolean === true);
    setItemSelected(checkBoxWishListBooleanTrue.length);
    return () => {
      if (pathname === '/') {
        setAturWishList(false);
      }
    };
  }, [checkBoxWishListBoolean]);

  return (
    <>
      {wishListProduct.length === 0 ? (
        <div className="flex flex-col mt-24 px-10 gap-y-3">
          <div className="">
            <img src="https://images.tokopedia.net/img/wishlist/empty-collection-state/1-emptystate.png?ect=4g" alt="img" className="object-cover" />
          </div>
          <h2 className="font-bold text-center text-2xl">Semua Wishlist-mu akan tersimpan disini</h2>
          <p className="text-center">isi Wishlist-mu dengan klik ikon hati waktu nemu barang yang kamu suka.</p>
          <Button styleButton={'bg-green-600 w-[60%] m-auto font-bold text-white py-2 rounded-lg'} textButton={'Cari Barang Impian'} handleClick={() => navigate('/')} />
        </div>
      ) : (
        <>
          <div className="w-full px-5 flex justify-between mt-28">
            <p>
              <span className="font-bold">{wishListProduct.length} </span>
              Barang
            </p>
            {!aturWishList && (
              <div className="flex gap-x-2 items-center">
                <p className="font-bold text-green-600" onClick={() => setAturWishList(!aturWishList)}>
                  Atur
                </p>
                <span>|</span>
                <FontAwesomeIcon icon={faChartBar} />
              </div>
            )}
          </div>
          <div
            className={
              pathname === '/wishlist'
                ? 'w-full mx-auto px-4 m-[20px_auto] grid grid-cols-[repeat(2,1fr)] gap-3 '
                : pathname !== '/'
                ? 'w-full m-[70px_auto] px-4 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3'
                : 'w-full mx-auto mt-4 mb-20 px-4 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3'
            }
          >
            {wishListProduct.map(({ id, category, title, image, price, rating }) => {
              return <CardProducts key={id} id={id} category={category} title={title} image={image} price={price} rating={rating} urlPath={'/product_detail'} />;
            })}
          </div>
          {aturWishList && <ConfirmDeleteProductsOnWishList showModal={showModal} setShowModal={setShowModal} />}
          <Modal handleDelete={handleDelete} modalTitle={`Hapus ${itemSelected} Barang`} modalParagraph={'Product yang kamu pilih akan di hapus dari Keranjang '} showModal={showModal} setShowModal={setShowModal} />
        </>
      )}
    </>
  );
};

export default WishList;
