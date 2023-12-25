import React from 'react';

function Button({ styleButton, textButton }) {
  return <button className={`${styleButton}`}>{textButton}</button>;
}

export default Button;
