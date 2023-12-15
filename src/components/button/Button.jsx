import React from 'react';

function Button({ colorButton, textButton }) {
  return <button className={`${colorButton} text-white font-bold w-[80px] h-10 rounded-md row-[2] col-[2]`}>{textButton}</button>;
}

export default Button;
