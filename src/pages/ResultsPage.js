import React, { Component } from 'react';
import AdUnit from '../components/AdUnit/AdUnit';
import Helmet from 'react-helmet';
import jsonp from 'jsonp';

//using ShareThis buttons that are managed by a script imported using HELMET in App component

class ResultsPage extends Component {

	constructor(props) {
		super(props)
		this.state = {
			FBCounter: 0,
			PinterestCounter: 0,
			result: "",
			shareUrl: 'http://www.whatami-quiz.com',
	    	title: '"What Am I Really?" A quiz in 7 parts to find the real you.',
	    	picture: ""
		}
	}

	componentDidMount() {
		const result = this.calculateResults();
		this.setState({result});
		this.getShareCount('Pinterest', 'https://api.pinterest.com/v1/urls/count.json?url=http%3A%2F%2Fwww.whatami-quiz.com');
		this.getShareCount('Facebook',"https://graph.facebook.com/?id=http%3A%2F%2Fwww.whatami-quiz.com");

		//Leaving it like this if we want to make it dynamic
		//created a pic for sharing, but it also needs the help of the leader of the Autobots.
		const resultImage = 'FB-share-preview-general.f52abe48.jpg'
		const imagePath = 'http://whatami-quiz.com/static/media/' + resultImage; 
		this.setState({picture: imagePath});
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
				<h1>Your result</h1>
				<h2>{this.state.result}</h2>
				<div>
					<div>
						<button onClick={this.facebookShare}>Facebook</button>
					</div>
					<h1>{this.state.FBCounter}</h1>
				</div>
				<div>
					<div>
						<button onClick={this.pinterestShare}>Pinterest</button>
					</div>
					<h1>{this.state.PinterestCounter}</h1>
				</div>
				<div>
					<span className='st_twitter_vcount'></span>
					<span className='st_pinterest_vcount'></span>
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
