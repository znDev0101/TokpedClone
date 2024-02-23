import { faArrowRight, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { dataUlasan } from '../data/dataUlasan';

const UlasanPembeli = () => {
  const [iconStars, setIconStars] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(<FontAwesomeIcon icon={faStar} className="text-yellow-400" />);
    }
    setIconStars(arr);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full m-[80px_auto] px-5">
      <div className="w-full flex items-center gap-x-5">
        <p>
          <FontAwesomeIcon icon={faStar} size="lg" className="text-yellow-400" /> <span className="text-2xl font-bold">5.0</span> <span className="text-gray-500 text-sm">/5.0</span>
        </p>
        <div className="">
          <p className="text-gray-950 font-semibold">
            100% pembeli merasa puas <FontAwesomeIcon icon={faArrowRight} />
          </p>
          <p className="text-sm text-gray-400">9.0 rating {dataUlasan.length} ulasan</p>
        </div>
      </div>
      <div className="w-full flex sticky top-0 mt-2 gap-x-2">
        <div className="border border-gray-400 px-2 py-1 rounded-xl">
          <span>Foto & Video</span>
        </div>
        <div className="border border-gray-400 px-2 py-1 rounded-xl">
          <span>Rating</span>
        </div>
        <div className="border border-gray-400 px-2 py-1 rounded-xl">
          <span>Urutkan</span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-5 my-5">
        {dataUlasan.map(({ name, comment }) => {
          return (
            <div className="flex flex-col gap-y-2 ">
              <div className="flex gap-x-2 items-center">
                <FontAwesomeIcon icon={faUser} className="border border-gray-600 p-3 rounded-full" />
                <p>{name}</p>
              </div>
              <div className="flex items-center">
                <span>{iconStars}</span>
                <p className="text-sm text-gray-600">1 Minggu yang lalu</p>
              </div>
              <p>{comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UlasanPembeli;
