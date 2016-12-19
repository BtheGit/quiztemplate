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
        if(next.hasOwnProperty(key)) {
          prev[key] = (prev[key]) ? prev[key] + next[key] : next[key]
        }
      }
      props.dispatch(updateScore(prev));
  }

  const handleAnswerSelected = (event) => {
    if (typeof props.nextQuestion === 'function') {
      updateAnswerScore(event.currentTarget.id);
      props.nextQuestion();
    }
  }

  const options = props.question.answers.map((answer, i) => {
    return <li key={i} id={i} onClick={handleAnswerSelected}><span>{answer.text}</span></li>;
  });

  return (
    <div>
    <h2>{props.question.question}</h2>
      <ul>
        {options}
      </ul>
    </div>
  );

}

export default SingleAnswer;

/* YOU WERE NOT USING redux in this component as you were just passing the props from its parent, so we don't need this code below */

// const mapStateToProps = (state) => {
//   return {};
// }
//
// export default connect(mapStateToProps)(SingleAnswer);
