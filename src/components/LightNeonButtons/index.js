import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function LightNeonButtons() {
  return (
    <section className="section section-8">
      <div>
        <h1>Standard</h1>
      <a href="#" className="btn-lightneon btn-lightneon-1">
        <span className="btn-lightneon-text"></span>Button
      </a>
      <a href="#" className="btn-lightneon btn-lightneon-2">
        <span className="btn-lightneon-text"></span>Button
      </a>
      <a href="#" className="btn-lightneon btn-lightneon-3">
        <span className="btn-lightneon-text"></span>Button
      </a>
      </div>
      <div>
      <h1>Glowing</h1>

      <a href="#" className="btn-lightneon btn-lightneon-glow btn-lightneon-1">
        <span className="btn-lightneon-text"></span>Button
      </a>
      <a href="#" className="btn-lightneon btn-lightneon-glow btn-lightneon-2">
        <span className="btn-lightneon-text"></span>Button
      </a>
      <a href="#" className="btn-lightneon btn-lightneon-glow btn-lightneon-3">
        <span className="btn-lightneon-text"></span>Button
      </a>
      </div>
    </section>
);
}

LightNeonButtons.propTypes = {

};
