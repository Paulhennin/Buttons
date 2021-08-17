import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function PaintImgButtons() {
  return (
  <section className="section section-9">
    <a href="#" className="btn btn-paint-img-buttons btn-paint-img-buttons-1">
      <span className="btn-paint-img-buttons-text">Button</span>
    </a>
    <a href="#" className="btn btn-paint-img-buttons btn-paint-img-buttons-2">
      <span className="btn-paint-img-buttons-text">Button</span>
    </a>
  </section>
  );
}

PaintImgButtons.propTypes = {

};
