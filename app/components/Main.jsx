import React from 'react';

// local imports
import Navigation from 'Navigation';

var Main = (props) => {
  return (
    <div>
      <Navigation/>
      <div>
        <div>
          Main.jsx rendered
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
