import React from 'react';

function ResultsPage (props) {
	return (
		<div>
			<h1>RESULTS!</h1>
			<h2>You got {props.quiz.correctAnswerCount} out of {props.quiz.correctAnswerCount}. {props.quiz.result}</h2>
		</div>
	);
}

export default ResultsPage;
