import React from 'react';

const Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired,
  },

  // currying pattern, a function that returns a function
  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  render() {
    const { countdownStatus } = this.props;
    const renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className='button secondary' onClick={this.onStatusChange('paused')}>Pause</button>;
      } else if (countdownStatus === 'paused') {
        return <button className='button primary' onClick={this.onStatusChange('started')}>Start</button>;
      }
    };

    return (
      <div className='controls'>
        {renderStartStopButton()}
        <button className='button alert hollow' onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
