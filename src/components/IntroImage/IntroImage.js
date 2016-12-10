import React from 'react';

function IntroImage (props) {

    let imagePath = require('../../media/'+props.image);

    return (
      <div className="intro-image">
        <img src={imagePath} alt={props.alt} />
      </div>
    );
}

export default IntroImage;
