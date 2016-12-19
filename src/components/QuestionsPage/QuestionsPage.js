import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import ResultsPage from '../../pages/ResultsPage';
import SingleAnswer from '../QuestionTypes/SingleAnswer';
import DatePicker from '../QuestionTypes/DatePicker';
import AdUnit from '../AdUnit/AdUnit';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { nextQuestion, finishQuiz, animateQuestionStart, animateQuestionEnd } from '../../actions'; //deprecated fetchQuestions for resetQuiz

class QuestionsPage extends Component {

  componentDidMount() {
    if( ! this.getCurrentQuestion()) {
      browserHistory.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    // Trigger the entering animation when next question is changed in the store
    if (nextProps.quiz.quesCounter !== this.props.quiz.quesCounter && this.props.quiz.questions[nextProps.quiz.quesCounter]) {
      console.log('received', nextProps.quiz.quesCounter);
      this.props.dispatch(animateQuestionEnd());
    }
  }

  handleAnswerSelected = () => {
    if(this.props.quiz.questions.length - 1 === this.props.quiz.quesCounter) {

      this.props.dispatch(animateQuestionStart());
      setTimeout(function() {
        this.props.dispatch(finishQuiz());
        this.props.dispatch(animateQuestionEnd());
      }.bind(this), 500); // Time is dependant on the CSS animation duration
    }
    else {
      this.props.dispatch(animateQuestionStart());

      setTimeout(function() {
        this.props.dispatch(nextQuestion()); // Time is dependant on the CSS animation duration
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
        <Header></Header>
        {(this.props.quiz.quizFinished)
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
