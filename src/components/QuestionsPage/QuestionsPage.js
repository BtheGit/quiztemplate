import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import ResultsPage from '../../pages/ResultsPage';
import SingleAnswer from '../questionTypes/SingleAnswer';
import DatePicker from '../questionTypes/DatePicker';
import AdUnit from '../AdUnit/AdUnit';
import { connect } from 'react-redux';
import { nextQuestion, finishQuiz, animateQuestionStart, animateQuestionEnd } from '../../actions'; //deprecated fetchQuestions for resetQuiz

class QuestionsPage extends Component {

  componentDidMount() {
    if( ! this.getCurrentQuestion()) {
      browserHistory.push('/');
    }
  }

  handleAnswerSelected = () => {
    if(this.props.quiz.questions.length - 1 === this.props.quiz.quesCounter) {
      this.props.dispatch(finishQuiz());
    }
    else {
      this.props.dispatch(animateQuestionStart());

      setTimeout(function() {
        this.props.dispatch(nextQuestion());
        this.props.dispatch(animateQuestionEnd());
      }.bind(this), 500);
    }
  }

  getCurrentQuestion() {
    return this.props.quiz.questions[this.props.quiz.quesCounter];
  }

  renderQuestion() {
    let question = this.getCurrentQuestion();
    if(typeof question === "undefined") {
      return;
    }

    switch(question.type) {
      case 'singleAnswer':
        return <SingleAnswer question={question} nextQuestion={this.handleAnswerSelected} {...this.props} />
      case 'datepicker':
        return <DatePicker />
      default:
        return <div>Empty</div>
    }
  }


  renderResultsPage() {
    return (
      <div>
        <ResultsPage
          {...this.props}
        />
      </div>
    )
  }

  questionAnimationClass() {
    if(this.props.quiz.animatingQuestion === true) {
      return "hide-question";
    }
    else {
      return "show-question";
    }
  }

  render() {
    return (
      <div>
        <ul className="nav">
        	<li><Link to="/">Home</Link></li>
        </ul>
        {
          (this.props.quiz.quizFinished)
          ?
          <div className="result-wrap">{this.renderResultsPage()}</div>
          :
          <div className="question-wrap">
            <div className={"col-main "+this.questionAnimationClass()}>
              {this.renderQuestion()}
            </div>
            <div className="col-sidebar">
              <AdUnit type="160x600"></AdUnit>
            </div>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quiz: state.quiz
  };
}

export default connect(mapStateToProps)(QuestionsPage);
