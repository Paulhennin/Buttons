import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function NeonButtons() {
  return (
    <section className="section">
      <a href="#" className="btn-neon btn-neon-1">
        <span className="btn-neon-text">Button</span>
      </a>
      <a href="#" className="btn-neon btn-neon-2">
        <span className="btn-neon-text">Button</span>
      </a>
    </section>
  );
}

NeonButtons.propTypes = {

};
