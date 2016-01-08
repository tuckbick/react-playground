import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AppComponent extends Component {
  render() {
    return (
      <div>
        <h2>PostNote</h2>
        <ul>
          <li><Link to='/'>Main</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
};
