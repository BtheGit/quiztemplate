import React, { Component } from 'react';
import StartButton from '../StartButton/StartButton';

class IntroPage extends Component {
  render() {
    return (
      <div>
        <StartButton text="Start Quiz" link="/questions"></StartButton>
      </div>
    );
  }
}

export default IntroPage;
