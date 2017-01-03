import React, { Component } from 'react';
import './App.css';
import { RouteTransition } from 'react-router-transition';
import Helmet from 'react-helmet';
import meta from './api/metadata_whatami.js';

class App extends Component {

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
