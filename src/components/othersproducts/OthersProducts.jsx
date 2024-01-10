import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import CardOthersProducts from '../cardothersproducts/CardOthersProducts';

function OthersProducts({ idProduct, categoryProducts }) {
  const { data } = useFetch(`https://fakestoreapi.com/products`);

  return (
    <>
      <div className="w-[92%] m-[20px_auto]">
        <div className="flex justify-between">
          <h5 className="text-lg font-bold">Pilihan Products Serupa</h5>
          <span className="text-green-700 font-bold">Lihat Semua</span>
        </div>
      </div>
      <div className="px-4 w-full mb-20 overflow-x-scroll whitespace-nowrap">
        {data
          .filter(({ id, category }) => id != idProduct && category === categoryProducts)
          .map(({ image, title, price, rating }) => {
            return <CardOthersProducts image={image} title={title} price={price} rating={rating} />;
          })}
      </div>
    </>
  );
}

export default OthersProducts;
