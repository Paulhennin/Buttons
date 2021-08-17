import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function LoadButtons() {
  return (
    <section className="section section-2">
      <a href="#" className="btn btn-load btn-load-1">
        <span className="btn-load-text">Button</span>
      </a>
      <a href="#" className="btn btn-load btn-load-2">
        <span className="btn-load-text">Button</span>
      </a>
    </section>
  );
}

LoadButtons.propTypes = {

};
