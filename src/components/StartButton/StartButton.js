import React, { Component } from 'react';
import { Link } from 'react-router';

class StartButton extends Component {
  render() {
    return (
      <Link to={this.props.link} className="start-button">{this.props.text}</Link>
    );
  }
}

export default StartButton;
