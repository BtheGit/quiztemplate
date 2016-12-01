import React, { Component } from 'react';
import { Link } from 'react-router';
import TFQuestion from '../TFQuestion/TFQuestion';
import ResultsPage from '../../pages/ResultsPage';
import { connect } from 'react-redux';
import { fetchQuestions, nextQuestion, finishQuiz, correctAnswer, addAnswered } from '../../actions';

class QuestionsPage extends Component {

  constructor() {
    super();
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchQuestions());
  }

  handleAnswerSelected(event) {
    this.checkAnswer(event.currentTarget.id);

    if(this.props.quiz.quesCounter === this.props.quiz.questions.length - 1) {
      this.props.dispatch(finishQuiz());
      return;
    }

    this.setNextQuestion();
  }

  checkAnswer(answer) {
    this.props.dispatch(addAnswered(answer));
    
    if (answer === this.getCurrentQuestion().answer.toString()) {
      this.props.dispatch(correctAnswer(answer));
    }
  }

  setNextQuestion() {
    this.props.dispatch(nextQuestion());
  }

  getCurrentQuestion() {
    return this.props.quiz.questions[this.props.quiz.quesCounter];
  }

  renderTFQuestion() {
    return (
      <div>
        <div>
          <TFQuestion
            question={this.getCurrentQuestion()}
            handleAnswerSelected={this.handleAnswerSelected}
          />
        </div>
        <div>
          <div><em>Answer Record: {this.props.quiz.answerRecord}</em></div>
          <div><em>Correct Count: {this.props.quiz.correctAnswerCount}</em></div>
        </div>
      </div>
    );
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
    const { quesCounter, correctAnswerCount, answerRecord } = this.props.quiz;

    return (
      <div>
        <pre>
          quesCounter: {quesCounter}
        </pre>
        <pre>
          correctAnswerCount: {correctAnswerCount}
        </pre>
        <pre>
          answerRecord: {answerRecord}
        </pre>
        {(this.props.quiz.quizFinished) ? this.renderResultsPage(): this.renderTFQuestion()}
        <div>
          <Link to="/">Home</Link>
        </div>
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
