import React, { Component } from 'react';
import './App.css';
import { RouteTransition } from 'react-router-transition';
import Helmet from 'react-helmet';
import meta from './api/metadata_whatami.js';
import IntroPage from './components/IntroPage/IntroPage';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';
import { connect } from 'react-redux';
import { resetQuiz } from './actions';

class App extends Component {

  constructor(props) {
		super(props);
    props.dispatch(resetQuiz());
	}

  render() {
    return (
      <div className="App">
        <Helmet
          title={meta.title}
          titleTemplate="WhatAmI-Quiz.com - %s"
          defaultTitle={meta.defaultTitle}
          meta={[
            {"property": "og:title", "content": meta.content},
            {"property": "og:description", "content": meta.description},
            {"property": "og:image", "content": meta.url+'/static/media/'+meta.image},
            {"property": "og:type", "content": "website"},
            {"property": "og:url", "content": meta.url},
            {"property": "og:site_name", "content": meta.site_name}
          ]}
        />
        <QuestionsPage></QuestionsPage>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quiz: state.quiz
  };
}

export default connect(mapStateToProps)(App);
