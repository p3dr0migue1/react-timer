import React from 'react';
import { IndexLink, Link } from 'react-router';

const Navigation = () => {
  return (
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>React Timer Application</li>
          <li>
            <IndexLink to='/' activeClassName='active-link'>Timer</IndexLink>
          </li>
          <li>
            <Link to='/' activeClassName='active-link'>Countdown</Link>
          </li>
        </ul>
      </div>
      <div className='top-bar-right'>
        <ul className='menu'>
          <li className='menu-text'>Created by: Pedro Miguel Curado</li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
