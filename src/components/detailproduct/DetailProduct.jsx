import React from 'react';
import { useOutletContext } from 'react-router';

const DetailProduct = () => {
  const { category, description } = useOutletContext();

  return (
    <>
      <div className="grid grid-rows-[repeat(5,max-content)] gap-y-3  mt-5 lg:mt-5">
        <h5 className="font-bold text-lg after:bg-red-400 after:contents">Detail Product</h5>
        <div className="grid grid-cols-[repeat(2,1fr)]">
          <span className="text-sm">Kondisi</span>
          <span className="text-sm">Baru</span>
        </div>
        <div className="grid grid-cols-[repeat(2,1fr)]">
          <span className="text-sm">Min. Pemesanan</span>
          <span className="text-sm">1 Buah</span>
        </div>
        <div className="grid grid-cols-[repeat(2,1fr)]">
          <span className="text-sm">Etalase</span>
          <span className="text-sm">{category}</span>
        </div>
      </div>
      <div className="grid grid-row-[repeat(2,1fr)] gap-y-1">
        <h5 className="font-bold text-lg">Deskripsi Product</h5>
        <p className="text-sm">{description}</p>
      </div>
    </>
  );
};

export default DetailProduct;
