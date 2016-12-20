import React from 'react';
import { Link } from 'react-router';
import StartButton from '../StartButton/StartButton';
import IntroImage from '../IntroImage/IntroImage';
import Header from '../Header/Header';

function IntroPage (props) {

    return (
      <div>
        <Header></Header>
        <div className="intro-wrap">
          <h1>What Am I <em>Really?</em></h1>
          <p>Have you ever pondered the nature of your existence?</p>
          <p>The purpose of your being?</p>
          <p>What it all means?</p>
          <h3>Find out your true nature with just a few simple questions</h3>
          <StartButton text="Start Quiz" link="/questions"></StartButton>
        </div>
        <IntroImage image="thinking.png" alt="Thinking man"></IntroImage>
      </div>
    );
}

export default IntroPage;
