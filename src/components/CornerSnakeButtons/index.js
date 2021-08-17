import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function CornerSnakeButtons() {
  return (
    <section className="section section-4">
      <a href="#" className="btn btn-cornersnake btn-cornersnake-1">
        <span className="btn-cornersnake-line-1"></span>
        <span className="btn-cornersnake-line-2"></span>
        <span className="btn-cornersnake-line-3"></span>
        <span className="btn-cornersnake-line-4"></span>
        Button
      </a>
      <a href="#" className="btn btn-cornersnake btn-cornersnake-2">
        <span className="btn-cornersnake-line-1"></span>
        <span className="btn-cornersnake-line-2"></span>
        <span className="btn-cornersnake-line-3"></span>
        <span className="btn-cornersnake-line-4"></span>
        Button
      </a>
    </section>
);
}

CornerSnakeButtons.propTypes = {

};
