import React from 'react';

const CountdownForm = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    const strSeconds = this.refs.seconds.value;

    // // -> regular expressions start and end with a forward slash
    // [0-9] -> any characters from 0 through 9
    // * -> 0 through 9 can show as many times as the users want
    // ^ -> match the start character that's either 0 through 9
    // $ -> match the end character that's either 0 through 9
    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },

  render() {
    return (
      <div>
        <form className="countdown-form" ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="seconds" placeholder="Enter time in seconds" />
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
