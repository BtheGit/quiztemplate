import React from 'react';
import { connect } from 'react-redux';
import { updateScore } from '../../actions';

const SingleAnswer = (props) => {

  const updateAnswerScore = (answer) => {
      //Pull in current scoreRecord and merge it (while also adding previous scores) with new question results
      //This is a bit dirty in my mind, there were certainly other ways. But I wanted it working for now.
      let prev = props.quiz.scoreRecord;
      let next = props.question.answers[answer].result;
      for (let key in next) {
        prev[key] = (prev[key]) ? prev[key] + next[key] : next[key]
      }
      props.dispatch(updateScore(prev));
  }

  const handleAnswerSelected = (event) => {
    if (typeof props.nextQuestion === 'function') {
      updateAnswerScore(event.currentTarget.id);
      props.nextQuestion();
    }
  }

  return (
    <div>
    <h2>{props.question.question}</h2>
      <ul>
        {props.question.answers.map((answer, i) => {
          return <li key={i} id={i} onClick={handleAnswerSelected}><span>{answer.text}</span></li>;
        })}
      </ul>
    </div>
  );

}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(SingleAnswer);
