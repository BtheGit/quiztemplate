import React, { Component } from 'react';
import './App.css';
import Helmet from 'react-helmet';
import meta from './api/metadata_whatami.js';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';
import { connect } from 'react-redux';
import { resetQuiz } from './actions';

class App extends Component {

  constructor(props) {
		super(props);
    props.dispatch(resetQuiz());
	}

  componentDidMount() {
    // (window.adsbygoogle = window.adsbygoogle || []).push({});    
  }

  render() {
    return (
      <div className="App">
        <Helmet
          title={meta.title}
          titleTemplate="WhatAmI-Quiz.com - %s"
          defaultTitle={meta.defaultTitle}
          script={[
            {"src" :"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}
          ]}
          link={[
            {"rel": "shortcut icon", "href": "./media/favicon.ico", "type": "image/x-icon"},
            {"rel": "icon", "href": "./media/favicon.ico", "type": "image/x-icon"}
          ]}
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
