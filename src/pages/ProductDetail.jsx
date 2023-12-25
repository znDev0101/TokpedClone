import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchData } from '../utils/fetchData';
import { products } from '../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import NavbarOnProductDetail from '../components/navbaronproductdetail/NavbarOnProductDetail';

function ProductDetail() {
  const { productId } = useParams();

  const { data } = fetchData(`https://fakestoreapi.com/products/${productId}`);

  const { id, title, description, image, price, rating, category } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-[93%] m-[70px_auto]">
        <div className="grid grid-rows-[repeat(6,max_content)] gap-y-3">
          <div className="w-full h-96 flex items-center overflow-hidden ">
            <img src={image} alt="image-product" className="w-80 m-auto object-cover " />
          </div>
          {/* TITLE PRODUCTS */}
          <div className="">
            <h1 className="text-2xl">{title}</h1>
          </div>
          {/* PRICE */}
          <div className="flex gap-x-2 items-center">
            <h5 className="font-bold text-2xl">{price}</h5>
            <img src="https://images.tokopedia.net/img/restriction-engine/bebas-ongkir/BO_reguler.png" alt="image-bebas-ongkir" className="h-7 w-12" />
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
      <NavbarOnProductDetail />
    </>
  );
}

export default ProductDetail;
