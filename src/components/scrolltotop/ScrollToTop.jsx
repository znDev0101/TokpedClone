import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ScrollToTop({ styleIfTrue, onClick, styleIffalse, numberScrollYWindow }) {
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [arrowToTop, setArrowToTop] = useState(false);

  useEffect(() => {
    const getScrollY = () => {
      setWindowScrollY(window.scrollY);
      if (window.scrollY < windowScrollY) {
        setArrowToTop(true);
      } else {
        setArrowToTop(false);
      }
    };

    window.addEventListener('scroll', getScrollY);
    return () => {
      removeEventListener('scroll', getScrollY);
    };
  }, [windowScrollY]);
  return (
    <>
      {windowScrollY > numberScrollYWindow && (
        <div className={arrowToTop ? `${styleIfTrue}` : `${styleIffalse}`}>
          <FontAwesomeIcon icon={faArrowUp} size="xl" onClick={onClick} />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
