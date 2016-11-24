import React, { PropTypes, Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import QuestionsPage from './pages/QuestionsPage';
import IntroPage from './pages/IntroPage';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;
    return (
      <Router history={history}>

        <Route name='home' path='/' component={App}>

          <IndexRoute component={IntroPage}/>
          <Route name='intro' path='' component={IntroPage} />
          <Route name='questions' path='/questions' component={QuestionsPage} />

        </Route>

      </Router>
    );
  }
}
