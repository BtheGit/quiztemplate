import React from 'react';
import { Link } from 'react-router';
import StartButton from '../StartButton/StartButton';
import IntroImage from '../IntroImage/IntroImage';

// function birthday(date) {
//   let birthPath = date.month % 10;
//   let secondBirthPath = (""+date.year).split("").map(Number).reduce((a, b) => a + b, 0) % 10;
//   return birthPath + ' // ' + secondBirthPath;
// }

// let newDate = {
//   day: 11,
//   month: 6,
//   year: 1994
// };

// console.log(birthday(newDate));

function IntroPage (props) {

    return (
      <div>
        <ul className="nav">
        	<li><Link to="/home">Home</Link></li>
        </ul>
        <div className="intro-wrap">
          <h1>What Am I, <em>Really?</em></h1>
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
