import React from 'react';

function AdUnit (props) {

  const ad300x250 = require('../../media/ad_300x250.png');
  const ad336x280 = require('../../media/ad_336x280.png');
  const ad160x600 = require('../../media/ad_160x600.png');

  switch(props.type) {
    case '300x250':
      return (
        <div className="ad-300-250">
          <img src={ad300x250} alt="Google Ad" />
        </div>
      )
    case '336x280':
      return (
        <div className="ad-336-280">
          <img src={ad336x280} alt="Google Ad" />
        </div>
      )
    case '160x600':
      return (
        <div className="ad-160-600">
          <img src={ad160x600} alt="Google Ad" />
        </div>
      )
    default:
      return false;
  }
}

export default AdUnit;
