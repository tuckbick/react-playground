import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NoteLinkComponent extends Component {

  render() {
    const id = this.props.note.id;
    const to = `/n/${id}`;

    return (
      <Link to={to}>Note Link {id}</Link>
    );
  }
}
