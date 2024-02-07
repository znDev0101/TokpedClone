import React from 'react';
import image1 from '../../assets/image2.png';

const SliderImages = () => {
  return (
    <div className="w-full h-max mt-5">
      <img src={image1} alt="img-slider" className="w-full object-cover" />
    </div>
  );
};

export default SliderImages;
