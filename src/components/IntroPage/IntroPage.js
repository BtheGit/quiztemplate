import React from 'react';
import { Link } from 'react-router';
import StartButton from '../StartButton/StartButton';

//MATUS, WHY ARE WE NOT JUST USING THE LINK COMPONENT HERE? WHY IS IT A SEPARATE COMPONENT? IS IT FOR CUSTOMIZING THE STYLING?
// I thought the button would have some functions like starting the quiz session so I wanted to separate it into a different component

function birthday(date) {
  let birthPath = date.month % 10;
  let secondBirthPath = (""+date.year).split("").map(Number).reduce((a, b) => a + b, 0) % 10;
  return birthPath + ' // ' + secondBirthPath;
}

let newDate = {
  day: 11,
  month: 6,
  year: 1994
};

console.log(birthday(newDate));

function IntroPage (props) {

    return (
      <div>
        <StartButton text="Start Quiz" link="/questions"></StartButton>
        <div>
        	<Link to="/results">Results Page</Link>
        </div>
      </div>
    );
}

export default IntroPage;
