import React, { Component } from 'react';
import './App.css';
// import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to QuizTemplate</h1>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
