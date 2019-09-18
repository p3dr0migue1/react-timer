import React from 'react';

const Clock = React.createClass({
  formatSeconds(totalSeconds) {
    let seconds = totalSeconds % 60;
    // Math.floor takes a number that has decimals and rounds it down
    // to the nearest whole number
    let minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  },

  render() {
    return(
      <div>
      </div>
    )
  }
});

module.exports = Clock;
