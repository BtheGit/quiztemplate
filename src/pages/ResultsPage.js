import React from 'react';
import AdUnit from '../components/AdUnit/AdUnit';
import Helmet from 'react-helmet';

function ResultsPage (props) {

	function calculateResults() {
		//This sorts the scores high to low and grabs the first one
		//It doesn't have the functionality to handle ties. We can add that later.

		let scoresArr = Object.entries(props.quiz.scoreRecord); //ES7 proposed method to flatten scores into 2D array
		scoresArr.sort((a,b) => {
			return b[1] - a[1];
		});

		return props.quiz.results[scoresArr[0][0]]
	}

	const result = calculateResults()

	return (
		<div>
			<div className="resultsHelmet">
				<Helmet 
					title={result}
					titleTemplate="WhatAmI-Quiz.com - %s"
					defaultTitle='"What am I really?" Find the real you with a few simple questions.'

				/>
			</div>
			<h1>Your result</h1>
			<h2>{result}</h2>
			<div>
				<span className='st_facebook_vcount'></span>
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
}

export default ResultsPage;
