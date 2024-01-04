import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ScrollToTop({ style, onClick }) {
  return (
    <div className={`${style} `}>
      <FontAwesomeIcon icon={faArrowUp} size="xl" onClick={onClick} />
    </div>
  );
}

export default ScrollToTop;
