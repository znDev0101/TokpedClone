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
      <div className="flex flex-nowrap gap-x-4 mt-2 mb-20 px-5 overflow-x-auto ">
        {data
          .filter(({ id, category }) => id != idProduct && category === categoryProducts)
          .map((data) => {
            return <CardOthersProducts key={data.id} data={data} />;
          })}
      </div>
    </>
  );
}

export default OthersProducts;
