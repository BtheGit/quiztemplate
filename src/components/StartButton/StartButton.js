import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { resetQuiz } from '../../actions';

const StartButton = (props) => {

  const handleReset = (event) => {
    props.dispatch(resetQuiz());
  }

  return (
    <a className="start-button" onClick={handleReset}>{props.text}</a>
  );
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(StartButton);
