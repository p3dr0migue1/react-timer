import React from 'react';

const Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
  },

  render() {
    const { countdownStatus } = this.props;
    const renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className='button secondary'>Paused</button>;
      } else if (countdownStatus === 'paused') {
        return <button className='button primary'>Start</button>;
      }
    };

    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button className='button alert hollow'>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
