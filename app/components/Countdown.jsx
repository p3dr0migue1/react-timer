import React from 'react';

import Clock from 'Clock';

const Countdown = (props) => {
  return (
    <div>
      <Clock totalSeconds={129} />
    </div> 
  );
};

module.exports = Countdown;
