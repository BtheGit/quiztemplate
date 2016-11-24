import React, { Component } from 'react';
import StartButton from './components/StartButton/StartButton';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to QuizTemplate</h1>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/questions">Questions</Link></li>
        </ul>
        {this.props.children}
        <StartButton text="Start Quiz"></StartButton>
      </div>
    );
  }
}

export default App;
