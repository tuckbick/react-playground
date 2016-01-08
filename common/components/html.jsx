import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';

export default class Html extends Component {
  render() {
    const {component, store} = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';

    return (
      <html>
        <head>
          <title>My App</title>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: content}}></div>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} charSet="UTF-8"></script>
          <script src="/build.js" charSet="UTF-8"></script>
        </body>
      </html>
    );
  }
}
