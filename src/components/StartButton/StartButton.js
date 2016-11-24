import React, { Component } from 'react';

class StartButton extends Component {
  render() {
    return (
      <button className="startButton">
      {this.props.text}
      </button>
    );
  }
}

export default StartButton;
