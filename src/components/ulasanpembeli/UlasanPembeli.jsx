import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function UlasanPembeli({ dataLimit }) {
  return (
    <div className="lg:w-full mx-auto grid lg:col-[1/2] grid-rows-[repeat(2,max-content)] gap-y-2 lg:ms-0">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Ulasan Pembeli</h2>
        <Link to="/ulasan_pembeli" className="font-bold text-green-700">
          Lihat Semua
        </Link>
      </div>
      {dataLimit.map(({ id, name, comment }) => {
        return (
          <div className="grid grid-cols-[repeat(2,1fr)] grid-rows-[3,max-content] gap-y-2" key={id}>
            {/* User Comment */}
            <div className="flex  gap-x-3 items-center">
              <FontAwesomeIcon icon={faUser} />
              <span className="text-sm">{name}</span>
            </div>
            {/* Isi comment */}
            <p className="row-[2] col-[1/3] text-sm">
              {comment}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default UlasanPembeli;
