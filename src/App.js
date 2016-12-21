import React, { Component } from 'react';
import './App.css';
import { RouteTransition } from 'react-router-transition';
import Helmet from 'react-helmet';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Helmet 
          title="What am I really? A quiz."
          titleTemplate="WhatAmI-Quiz.com - %s"
          defaultTitle='"What am I really?" Find the real you with a few simple questions.'
          script={[
            {"type": "text/javascript", "innerHTML": `{var switchTo5x=true;}`},           
            {"type": "text/javascript", "src": "http://w.sharethis.com/button/buttons.js?publisher=61f9d1b3-4729-4b86-a17f-cfcb51980324"},
            {"type": "text/javascript", "innerHTML": `{stLight.options({publisher: "61f9d1b3-4729-4b86-a17f-cfcb51980324", doNotHash: false, doNotCopy: false, hashAddressBar: true});}`}
          ]}
          meta={[
            {"property": "og:title", "content": "What am I really? A quiz in 7 parts."},
            {"property": "og:description", "content": "Discover the real you with just a few short questions."},
            //warning, hardcoded image reference for now
            {"property": "og:image", "content": "whatami-quiz.com/static/media/FB-share-preview-general.f52abe48.jpg"},
            {"property": "og:type", "content": "website"},
            {"property": "og:url", "content": "http://www.whatami-quiz.com"},
            {"property": "og:site_name", "content": "What Am I Really?"}
          ]}          
        />
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
