import React from 'react';
import { connect } from 'react-redux';

const QuizProgress = ({quiz, props}) => {

  let currentQ = quiz.quesCounter+1;
  let totalQ = quiz.questions.length;
  let ratio = (currentQ / totalQ) * 100;

  let displayProgress = null;

  if(props.displayType === 'numeric') {
    displayProgress = <span className="progress-numeric"><b>{currentQ}</b> / {totalQ}</span>
  }
  else if(props.displayType === 'graphic'){
    displayProgress = (
      <div className="progress-graphic">
        <div className="progress-done" style={{width: ratio+'%'}}></div>
      </div>
    )
  }

  return (
    <div>
        {quiz.questions.length > 0 &&
          displayProgress
        }
    </div>
  );
}

const mapStateToProps = (state, props) => ({
    quiz: state.quiz,
    props: props
});

export default connect(mapStateToProps)(QuizProgress);
