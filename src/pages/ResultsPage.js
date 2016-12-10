import React from 'react';

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
			<h1>RESULTS!</h1>
			<h2>{result}</h2>
		</div>
	);
}

export default ResultsPage;
