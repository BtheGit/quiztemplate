import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleAnswer extends Component {

  constructor() {
    super();
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  handleAnswerSelected(e) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e.target.value);
    }
  }

  render() {
    return (
      <div>
        <ul>
          <h2>{this.props.question.question}</h2>
          {this.props.question.answers.map((answer, i) => {
            return <li key={i} onClick={this.handleAnswerSelected}>{answer.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(SingleAnswer);
