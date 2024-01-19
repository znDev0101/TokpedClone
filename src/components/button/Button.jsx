import React from 'react';

function Button({ styleButton, textButton, handleClick }) {
  return (
    <button className={`${styleButton}`} onClick={handleClick}>
      {textButton}
    </button>
  );
}

export default Button;
