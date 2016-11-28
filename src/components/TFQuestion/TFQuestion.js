import React from 'react';

function TFQuestion (props) {
	return (
		<div>
			<div className="TF-question">
				<h1>{props.question}</h1>
			</div>
			<div className="TF-answers">
				<div className="TF-answer-true" id="true" onClick={props.handleAnswerSelected}>True</div>
				<div className="TF-answer-false" id="false" onClick={props.handleAnswerSelected}>False</div>
			</div>
		</div>

	);
}



export default TFQuestion;