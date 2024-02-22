import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import NavbarOnProductDetail from '../components/navbaronproductdetail/NavbarOnProductDetail';
import OthersProducts from '../components/othersproducts/OthersProducts';
import UlasanPembeli from '../components/ulasanpembeli/UlasanPembeli';
import { dataUlasan } from '../data/dataUlasan';
import { useFetch } from '../hooks/useFetch';
import VarianProduct from '../components/varianproduct/VarianProduct';
import { toast, Bounce } from 'react-toastify';
import { products } from '../data/data';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice/cartSlice';
import { addProductToWishList, addWishListHeartBoolean, setBooleanWishList, removeProductFromWishList } from '../redux/wishlistSlice/wishListSlice';
import ScrollToTop from '../components/scrolltotop/ScrollToTop';

function ProductDetail() {
  const { productId: id } = useParams();
  const [dataLimit, setDataLimit] = useState([]);
  const [isOpenVarianProduct, setIsOpenVarianProduct] = useState(false);
  const [filterVarianProduct, setfilterVarianProduct] = useState([]);
  const { cartProduct } = useSelector((state) => state.cart);
  const { wishListHeartBoolean } = useSelector((state) => state.wishList);

  const [indexHeartBoolean, setIndexHeartBoolean] = useState([]);

  const dispatch = useDispatch();

  const { data: dataDetail, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);

  const { title, description, image, price: priceProduct, rating, category } = dataDetail;

  console.log(category);

  useEffect(() => {
    const limit = dataUlasan.slice(0, 2);
    setDataLimit(limit);
    const filterResult = products.filter((data) => data.id == id);
    setfilterVarianProduct(filterResult);
    dispatch(addWishListHeartBoolean({ id }));
  }, [id]);

  useEffect(() => {
    const findIndexWishListBoolean = wishListHeartBoolean.findIndex((data) => data.id === id);
    setIndexHeartBoolean(findIndexWishListBoolean);
  }, [wishListHeartBoolean, id]);

  const handleAddToCart = () => {
    const conditionStock = cartProduct.filter((data) => data.id == id);
    if (conditionStock[0]?.stock === 0) {
      toast.warn('Maaf stock barang sudah habis', {
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
    } else {
      toast.success('Berhasil menambahkan ke keranjang', {
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
      dispatch(addToCart({ id, value: filterVarianProduct, description, title, price: priceProduct }));
    }
  };

  const handleClick = () => {
    dispatch(setBooleanWishList({ id }));
    if (wishListHeartBoolean[indexHeartBoolean]?.boolean) {
      dispatch(removeProductFromWishList({ id }));
      toast.info('🗑️, Barang berhasil di hapus dari wishlist', {
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
    } else {
      dispatch(addProductToWishList({ id, category, title, description, image, priceProduct, rating }));
      toast.success('❤️, Barang berhasil menambahkan ke wishlist', {
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
    }
  };

  return (
    <>
      <div className={isOpenVarianProduct ? 'w-[93%] mt-20 mx-auto  z-40  ' : 'w-[93%]  mt-20 mx-auto z-40'}>
        <div className="grid grid-rows-[repeat(5,max_content)] gap-y-3">
          <div className="w-full h-96 flex items-center overflow-hidden m-auto">
            {loading ? <p className="text-2xl font-bold text-center">Image Loading...</p> : <img src={image} alt="image-product" className="w-80 m-auto object-cover " />}
          </div>
          {/* TITLE PRODUCTS */}
          <div className="">
            <h1 className="text-2xl">{title}</h1>
          </div>
          {/* PRICE */}
          <div className="flex justify-between gap-x-2 items-center">
            <div className="flex">
              <h5 className="font-bold text-2xl">{priceProduct}</h5>
              <img src="https://images.tokopedia.net/img/restriction-engine/bebas-ongkir/BO_reguler.png" alt="image-bebas-ongkir" className="h-7 w-12" />
            </div>
            {wishListHeartBoolean[indexHeartBoolean]?.boolean ? (
              <span onClick={handleClick}>
                <FontAwesomeIcon size="xl" icon={faHeartSolid} className="text-pink-500 " />
              </span>
            ) : (
              <span onClick={handleClick}>
                <FontAwesomeIcon size="xl" icon={faHeartRegular} />
              </span>
            )}
          </div>
          <div className="flex gap-x-2 items-center">
            <h5>Terjual 999+</h5>
            <div className="flex items-center gap-x-1 border border-gray-400 p-[2px_10px] rounded-lg">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
              <h5>{rating?.rate}</h5>
            </div>
          </div>
          {/* DETAIL PRODUCTS */}
          <div className="grid grid-rows-[repeat(5,max-content)] gap-y-3">
            <h5 className="font-bold text-2xl">Detail Product</h5>
            <div className="grid grid-cols-[repeat(2,1fr)]">
              <span>Kondisi</span>
              <span>Baru</span>
            </div>
            <div className="grid grid-cols-[repeat(2,1fr)]">
              <span>Min. Pemesanan</span>
              <span>1 Buah</span>
            </div>
            <div className="grid grid-cols-[repeat(2,1fr)]">
              <span>Etalase</span>
              <span>{category}</span>
            </div>
          </div>
          <div className="grid grid-row-[repeat(2,1fr)] gap-y-1">
            <h5 className="font-bold text-2xl">Deskripsi Product</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <UlasanPembeli dataLimit={dataLimit} />
      <OthersProducts idProduct={id} categoryProducts={category} />
      <NavbarOnProductDetail
        style={'w-full bg-white grid grid-cols-[max-content_1fr_1fr] fixed bottom-0 px-2 py-2 gap-x-2 items-center z-30'}
        handleClick={category !== 'jewelery' && category !== 'electronics' ? () => setIsOpenVarianProduct(true) : handleAddToCart}
      />
      {category !== 'jewelery' && category !== 'electronics' && (
        <VarianProduct
          filterVarianProduct={filterVarianProduct}
          imageProduct={image}
          price={priceProduct}
          productId={id}
          stock={filterVarianProduct[0]?.stock}
          isOpenVarianProduct={isOpenVarianProduct}
          setIsOpenVarianProduct={setIsOpenVarianProduct}
          handleClick={handleAddToCart}
        />
      )}
      <ScrollToTop
        styleIfTrue={'fixed w-12 justify-center items-center flex h-12 bottom-20 right-6 rounded-full shadow-lg bg-white  duration-300 translate-y-0 '}
        styleIffalse={'fixed w-12 justify-center items-center flex h-12 bottom-0 right-6 rounded-full shadow-lg bg-white  duration-300 translate-y-full'}
        onClick={() => window.scrollTo(0, 0)}
        numberScrollYWindow={50}
      />
    </>
  );
}

export default ProductDetail;
