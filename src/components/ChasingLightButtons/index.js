import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function ChasingLightButtons() {
  return (
    <section className="section section-11">
      <a href="#" className="btn btn-chasing-light btn-chasing-light-1">
        <span className="btn-chasing-light-text-1"></span>
        <span className="btn-chasing-light-text-2"></span>
        <span className="btn-chasing-light-text-3"></span>
        <span className="btn-chasing-light-text-4"></span>
        Button
      </a>
    </section>
  );
}

ChasingLightButtons.propTypes = {

};
