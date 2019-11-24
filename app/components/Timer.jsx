import React from 'react';

// local imports
import Clock from 'Clock';
import Controls from 'Controls';

const Timer = React.createClass({
  getInitialState() {
    return {
      count: 0,
      timerStatus: 'stopped',
    };
  },

  componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          // reset count
          this.setState({ count: 0});
        case 'paused':
          // clear the timer
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  },

  handleStatusChange(newTimerStatus) {
    this.setState({ timerStatus: newTimerStatus });
  },

  startTimer() {
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  },

  render() {
    const { count, timerStatus } = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
});

module.exports = Timer;
