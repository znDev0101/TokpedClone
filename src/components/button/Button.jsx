import React from 'react';

function Button({ styleButton, textButton, handleClickOpenVarianProduct }) {
  return (
    <button className={`${styleButton}`} onClick={handleClickOpenVarianProduct}>
      {textButton}
    </button>
  );
}

export default Button;
