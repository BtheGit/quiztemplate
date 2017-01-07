import React, { Component } from 'react';

class AdUnit extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    const ad300x250 = require('../../media/ad_300x250.png');
    const ad336x280 = require('../../media/ad_336x280.png');
    const ad160x600 = require('../../media/ad_160x600.png');

    switch(this.props.type) {
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
}

// return (
//   <div className="ad-160-600">
//     <ins className="adsbygoogle"
//     style={{display: 'inline-block', width: '160px', height: '600px'}}
//     data-ad-client="ca-pub-4799419738830825"
//     data-ad-slot="6737933891">
//     </ins>
//   </div>
// )

export default AdUnit;
