import React from 'react';

function ResultsPage (props) {

	function calculateResults() {

	}

	return (
		<div>
			<h1>RESULTS!</h1>
			<h2>Your scores were {JSON.stringify(props.quiz.scoreRecord)}.</h2>
		</div>
	);
}

export default ResultsPage;
