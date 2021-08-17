import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function SnakeButtons() {
  return (
    <section className="section section-5">
      <ul className="btn-snake-list">
        <li className="btn-snake-list-li">
          <a href="#" className="btn btn-snake btn-snake-1">
            <span className="btn-snake-line"></span>
            <span className="btn-snake-line"></span>
            <span className="btn-snake-line"></span>
            <span className="btn-snake-line"></span>
            Button
          </a>
        </li>
        <li className="btn-snake-list-li">
          <a href="#" className="btn btn-snake btn-snake-1">
            <span className="btn-snake-line"></span>
            <span className="btn-snake-line"></span>
            <span className="btn-snake-line"></span>
            <span className="btn-snake-line"></span>
            Button
          </a>
        </li>
      </ul>
    </section>
);
}

SnakeButtons.propTypes = {

};

