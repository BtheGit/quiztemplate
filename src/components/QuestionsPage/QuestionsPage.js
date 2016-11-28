import React, { Component } from 'react';
import { Link } from 'react-router';
import TFQuestion from '../TFQuestion/TFQuestion';
import ResultsPage from '../../pages/ResultsPage';
import { connect } from 'react-redux';
import quiz from '../../api/quizdata';

class QuestionsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: '',
      questions: [],
      results: [],
      result: '',
      quesCounter: 0,
      quesText: '',
      quesOptions: [],
      quesAnswer: '',
      quesReveal: '',
      quizFinished: false,
      answerRecord: [],
      correctAnswerCount: 0
    }
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    this.loadQuizData();
    this.loadQuestionData();
  }

  loadQuizData() {
    this.setState({
      type: quiz.type,
      questions: quiz.questions,
      results: quiz.results,
    })
  }

  loadQuestionData() {
    this.setState({
      quesText: quiz.questions[this.state.quesCounter]['question'],
      quesAnswer: quiz.questions[this.state.quesCounter]['answer'],
      quesReveal: quiz.questions[this.state.quesCounter]['reveal'],
    })
  }

  handleAnswerSelected(event) {
    if(this.state.quesCounter === this.state.questions.length) {
      this.calculateResults();
      this.setState({quizFinished: true});
    } else {
      this.checkAnswer(event.currentTarget.id);
      this.setNextQuestion();
    }
  }

  checkAnswer(answer) {
    this.setState({answerRecord: [...this.state.answerRecord, answer]})
    if (answer === this.state.quesAnswer.toString()) {
      this.setState({correctAnswerCount: this.state.correctAnswerCount + 1})
    }


  }

  setNextQuestion() {
    this.setState({quesCounter: this.state.quesCounter + 1});
    this.loadQuestionData();
    this.props.dispatch({
      type: 'NEXT_QUESTION'
    });
  }

  calculateResults() {
    if (this.state.type === 'TF') {
      this.setState({result: this.state.results[this.state.correctAnswerCount]});
    }
  }

  renderTFQuestion() {
    return (
      <div>
        <div>
          <TFQuestion
            question={this.state.quesText}
            handleAnswerSelected={this.handleAnswerSelected}
          />
        </div>
        <div>
          <div><em>Answer Record: {this.state.answerRecord}</em></div>
          <div><em>Correct Count: {this.state.correctAnswerCount}</em></div>
        </div>
      </div>
    );
  }

  renderResultsPage() {
    return (
      <div>
        <ResultsPage
          count={this.state.questions.length}
          result={this.state.correctAnswerCount}
          resultText={this.state.result}
        />
      </div>
    )
  }



  render() {
    const { quesCounter } = this.props;

    return (
      <div>
        <pre>
          Question Counter {this.props.quiz.quesCounter}
        </pre>
        {(this.state.quizFinished) ? this.renderResultsPage(): this.renderTFQuestion()}
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
