import React from 'react';
import bebasOngkir from '../../assets/bebas_ongkir.png';

// third party library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import PilihVarianProduct from '../pilihvarianproduct/PilihVarianProduct';
import DescriptionInfoProduct from '../descriptioninfoproduct/DescriptionInfoProduct';

const InfoProduct = ({ wishListHeartBoolean, indexHeartBoolean, handleClick, ...data }) => {
  const { idProduct, title, price, rating, description, category } = data;

  console.log(category);

  return (
    <div className="w-full lg:max-w-lg  lg:overflow-auto   flex flex-col gap-y-3 lg:mt-5">
      <div className="flex flex-col">
        <h5>{title}</h5>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-x-2">
            <span className="font-bold text-xl">${price}</span>
            <div className="w-20">
              <img src={bebasOngkir} alt="img" className="w-full object-cover" />
            </div>
          </div>
          {wishListHeartBoolean[indexHeartBoolean]?.boolean ? (
            <span onClick={handleClick} className="contents lg:hidden">
              <FontAwesomeIcon icon={faHeartSolid} size="lg" className="text-pink-500" />
            </span>
          ) : (
            <span onClick={handleClick} className="contents lg:hidden">
              <FontAwesomeIcon icon={faHeartRegular} size="lg" />
            </span>
          )}
        </div>
        {/* only mobile */}
        {screen.width <= 428 && (
          <div className="flex flex-col mt-7 gap-y-5">
            <div className="">
              <h1 className="font-bold">Detail Produk</h1>
              <div className="flex items-center gap-x-16 mt-2">
                {category === "men's clothing" || category === "women's clothing" ? (
                  <>
                    <ul>
                      <li>Kondisi</li>
                      <li>Bahan</li>
                      <li>Ukuran</li>
                      <li>Acara</li>
                      <li>Etalase</li>
                    </ul>
                    <ul>
                      <li>: Baru</li>
                      <li>: Katun</li>
                      <li>: L</li>
                      <li>: Formal</li>
                      <li>: Baju</li>
                    </ul>
                  </>
                ) : (
                  <ul></ul>
                )}
              </div>
            </div>
          </div>
        )}
        {/* ONLY DESKTOP */}
        <DescriptionInfoProduct id={idProduct} category={category} description={description} />
        {/* ONLY ON MOBILE */}
        <div className="flex flex-col mt-4 gap-y-2 lg:hidden">
          <h1 className="font-bold">Deskripsi produk</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
