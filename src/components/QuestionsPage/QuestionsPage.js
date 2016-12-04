import React, { Component } from 'react';
import { Link } from 'react-router';
import ResultsPage from '../../pages/ResultsPage';
import SingleAnswer from '../questionTypes/SingleAnswer';
// import TFQuestion from '../TFQuestion/TFQuestion';
import DatePicker from '../questionTypes/DatePicker';
import { connect } from 'react-redux';
import { fetchQuestions, nextQuestion, finishQuiz } from '../../actions';

class QuestionsPage extends Component {

  constructor() {
    super();
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchQuestions());
  }

  handleAnswerSelected() {
    if(this.props.quiz.questions.length - 1 === this.props.quiz.quesCounter) {
      this.props.dispatch(finishQuiz());
    }
    else {
      this.props.dispatch(nextQuestion());
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
        return <SingleAnswer question={question} onChange={this.handleAnswerSelected} />
      case 'datepicker':
        return <DatePicker question={question} onChange={this.handleAnswerSelected} />
      default:
        return <div>Empty</div>
    }
  }

  renderResultsPage() {
    return (
      <div>
        <ResultsPage
          count={this.props.quiz.questions.length}
          result={this.props.quiz.correctAnswerCount}
          resultText={this.props.quiz.result}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <ul className="nav">
        	<li><Link to="/">Home</Link></li>
        </ul>
        {
          (this.props.quiz.quizFinished)
          ? <div className="result-wrap">{this.renderResultsPage()}</div>
          : <div className="question-wrap">{this.renderQuestion()}</div>
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
