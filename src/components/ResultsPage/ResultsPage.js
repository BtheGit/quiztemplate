import React, { Component } from 'react';
import AdUnit from '../AdUnit/AdUnit';
import Helmet from 'react-helmet';
import jsonp from 'jsonp';
import Script from 'react-load-script';
import meta from '../../api/metadata_whatami.js';

//using ShareThis buttons that are managed by a script imported using HELMET in App component

class ResultsPage extends Component {

	constructor(props) {
		super(props)
		this.state = {
			FBCounter: 0,
			PinterestCounter: 0,
			result: "",
			shareUrl: meta.url,
	    	title: meta.default_title,
	    	picture: ""
		}
	}

	componentDidMount() {
		const result = this.calculateResults();
		this.setState({result});
		this.getShareCount('Pinterest', 'https://api.pinterest.com/v1/urls/count.json?url='+meta.url);
		this.getShareCount('Facebook',"https://graph.facebook.com/?id="+meta.url);

		//Leaving it like this if we want to make it dynamic
		//created a pic for sharing, but it also needs the help of the leader of the Autobots.
		const resultImage = 'FB-share-preview-general.f52abe48.jpg'
		const imagePath = 'http://whatami-quiz.com/static/media/' + resultImage;
		this.setState({picture: imagePath});
	}

	handleShareScriptLoad() {
		// var switchTo5x=true;
		// window.stLight.options({publisher: "ea0ac320-0f7c-429e-8871-43dc8178629a", doNotHash: true, doNotCopy: true, hashAddressBar: false});
		// Re-render (parse) ShareThis buttons
		if (window.stButtons){window.stButtons.locateElements()};
	}


	//########################### SHARE BUTTON LOGIC ###################
	facebookShare = () => {
    const params = {
        u: this.state.shareUrl,
        picture: this.state.picture,
        title: this.state.title,
        description: this.state.result,
    };
		const url = `https://www.facebook.com/sharer.php${this.serializeParams(params)}`;
		this.popUp(url, 450, 550)
	}

	pinterestShare = () => {
	    const params = {
	        url: this.state.shareUrl,
	        media: this.state.picture,
	        description: this.state.title,
	    };
		const url = 'https://pinterest.com/pin/create/button/' + this.serializeParams(params);
		this.popUp(url, 450, 550)
	}


	serializeParams = object => {
	  return '?' + Object.keys(object)
	    .filter(key => !!object[key])
	    .map(key => `${key}=${encodeURIComponent(object[key])}`)
	    .join('&');
	}

	popUp = (url, height, width) => {
		return window.open(url, "", `height=${height},width=${width},status=yes,toolbar=no,menubar=no,location=no`);
	}

	getShareCount = (service, url) => {
		jsonp(url, (err, data) => {
			switch(service){
				case 'Facebook':
					this.setState({FBCounter: data.share.share_count});
					break;
				case 'Pinterest':
					this.setState({PinterestCounter: data.count});
					break;
				default:
					break;
			}
		});
	}
	//################ END SHARE BUTTON ###################################


	calculateResults = () => {
		//This sorts the scores high to low and grabs the first one
		//It doesn't have the functionality to handle ties. We can add that later.

		let scoresArr = Object.entries(this.props.quiz.scoreRecord); //ES7 proposed method to flatten scores into 2D array
		scoresArr.sort((a,b) => {
			return b[1] - a[1];
		});

		return this.props.quiz.results[scoresArr[0][0]]
	}


    render () {

		return (
			<div>
				<div className="resultsHelmet">
					<Helmet
						title={this.state.result}
						titleTemplate="What are you really? - %s"
						defaultTitle='"What am I really?" Find the real you with a few simple questions.'
					/>
				</div>
				<Script
		      url="http://w.sharethis.com/button/buttons.js?publisher=61f9d1b3-4729-4b86-a17f-cfcb51980324"
		      onLoad={this.handleShareScriptLoad.bind(this)}
					onError={function() {console.log('ShareThis did not load');}}
		    />
				<h1>Your result</h1>
				<h2>{this.state.result}</h2>
				<div className="share-icons">
					<span className="custom-st-button">
					<div className="stBubble"><div className="stBubble_count">{this.state.FBCounter}</div></div>
						<a className="button facebook" onClick={this.facebookShare}>Share</a>
					</span>
					<span className="custom-st-button">
					<div className="stBubble"><div className="stBubble_count">{this.state.PinterestCounter}</div></div>
						<a className="button pinterest" onClick={this.pinterestShare}>Share</a>
					</span>
					<span className='st_twitter_vcount'></span>
					<span className='st_linkedin_vcount'></span>
					<span className='st_plusone_vcount'></span>
					<span className='st_tumblr_vcount'></span>
					<span className='st_pocket_vcount'></span>
					<span className='st_sharethis_vcount'></span>
					<span className='st_email_vcount'></span>
				</div>
				<AdUnit type="336x280"></AdUnit>
			</div>
		);
	};
}

export default ResultsPage;
