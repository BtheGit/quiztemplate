import React from 'react';

function ResultsPage (props) {
	return (
		<div>
			<h1>RESULTS!</h1>
			<h2>You got {props.result} out of {props.count}. {props.resultText}</h2>
		</div>
	);
}

export default ResultsPage;
