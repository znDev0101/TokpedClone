import React, { useState, useEffect } from 'react';
import image1 from '../../assets/image2.png';
import image2 from '../../assets/image1.png';

const slideImages = [image1, image2];

const SliderImages = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);

    return () => {
      clearInterval(time);
    };
  }, []);

  const slideImage = slideImages[count % slideImages.length];

  return (
    <div className="w-full h-max mt-5">
      <img src={slideImage} alt="img-slider" className="w-full object-cover" />
    </div>
  );
};

export default SliderImages;
