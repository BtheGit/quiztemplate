import React, { Component } from 'react';
import { connect } from 'react-redux';

const SingleAnswer = (props) => {


  const handleAnswerSelected = (e) => {
    if (typeof props.nextQuestion === 'function') {
      props.nextQuestion(e.target.value);
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
