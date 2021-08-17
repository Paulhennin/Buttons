import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function RippleButtons() {
  const [clickbtn, setClickbtn] = useState(false);

  useEffect(() => {
    const btns = document.querySelectorAll('.btn-ripple')
    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
        const ripples = document.createElement('span');
        ripples.style.left = `${x}px`;
        ripples.style.top = `${y}px`;
        e.target.appendChild(ripples);
        setTimeout(() => {
          ripples.remove();
        }, 1000);
      });
    });
  }, [clickbtn]);
  const handleOnClick = (e) => {
    e.preventDefault();
    setClickbtn(!clickbtn);
  };

  return (
    <section className="section section-3">
      <a href="#" onClick={handleOnClick} className="btn btn-ripple btn-ripple-1">
        Button
      </a>
      <a href="#" onClick={handleOnClick} className="btn btn-ripple btn-ripple-2">
        Button
      </a>
    </section>
  );
}

RippleButtons.propTypes = {

};
