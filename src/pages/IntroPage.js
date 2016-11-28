import React from 'react';
import { Link } from 'react-router';
import StartButton from '../components/StartButton/StartButton';

//MATUS, WHY ARE WE NOT JUST USING THE LINK COMPONENT HERE? WHY IS IT A SEPARATE COMPONENT? IS IT FOR CUSTOMIZING THE STYLING?

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
