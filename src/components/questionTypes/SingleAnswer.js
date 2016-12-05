import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextQuestion, finishQuiz } from '../../actions';

const SingleAnswer = (props) => {


  const handleAnswerSelected = (e) => {
      if (props.quiz.questions.length - 1 === props.quiz.quesCounter) {
        props.dispatch(finishQuiz());
      } else {
        props.dispatch(nextQuestion());
      }
  }

  
  return (
    <div>
      <ul>
        <h2>{props.question.question}</h2>
        {props.question.answers.map((answer, i) => {
          return <li key={i} onClick={handleAnswerSelected}>{answer.text}</li>;
        })}
      </ul>
    </div>
  );
  
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(SingleAnswer);
