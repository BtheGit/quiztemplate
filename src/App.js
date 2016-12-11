import React, { Component } from 'react';
import './App.css';
import { RouteTransition } from 'react-router-transition';

class App extends Component {

  render() {
    return (
      <div className="App">
        <RouteTransition
          pathname={this.props.location.pathname}
          className="transition-wrapper"
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
        >
          {this.props.children}
        </RouteTransition>
      </div>
    );
  }
}

export default App;
