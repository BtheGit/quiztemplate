import React, { Component } from 'react';

class TFQuestion extends Component {

	render() {
		return (
			<div>
				<div className="TF-question">
				{typeof this.props.question !== 'undefined' && /* I found this style of 'if' statement somewhere, I see it for the first time. It looks weird. */
					<h2>{this.props.question.question}</h2>
				}
				</div>
				<div className="TF-answers">
				<div className="TF-answer-true" id="true" onClick={this.props.handleAnswerSelected}>True</div>
				<div className="TF-answer-false" id="false" onClick={this.props.handleAnswerSelected}>False</div>
				</div>
			</div>
		);
	}
}



export default TFQuestion;
