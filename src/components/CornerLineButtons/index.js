import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function CornerLineButtons() {
  return (
    <section className="section section-10">
      <a href="#" className="btn btn-corner-line btn-corner-line-1">
        <span className="btn-corner-line-text">Button</span>
      </a>
      <a href="#" className="btn btn-corner-line btn-corner-line-2">
        <span className="btn-corner-line-text">Button</span>
      </a>
    </section>
  );
}

CornerLineButtons.propTypes = {

};
