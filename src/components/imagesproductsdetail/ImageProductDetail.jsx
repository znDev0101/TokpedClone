import React from 'react';

const ImageProductDetail = ({ image, loading }) => {
  return (
    <div className="w-full lg:w-72 lg:sticky lg:top-36 lg:mt-7  lg:self-start">
      {loading ? <p className="text-2xl font-bold text-center">Image Loading...</p> : <img src={image} alt="image-product" className="w-full h-full object-cover " />}
    </div>
  );
};

export default ImageProductDetail;
