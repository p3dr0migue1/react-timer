import React from 'react'

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          Rendered!!
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
