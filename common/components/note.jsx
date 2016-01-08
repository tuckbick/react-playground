import React, { Component } from 'react';
import { connect as Connect } from 'react-redux';

import Api from '../api';
import Constants from '../constants';

export default class NoteComponent extends Component {

  componentDidMount() {
    console.log(`componentDidMount ${this.props.params.id}`);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <p>This is a note {this.props.name}</p>
      </div>
    );
  }
}

NoteComponent.fetchData = (props, dispatch) => {
  dispatch({
    type: Constants.NOTE_REQUEST
  });

  return Api.get(`/n/${props.params.id}`)
    .then((result) => {

      dispatch({
        type: Constants.NOTE_RECEIVE,
        note: result
      });
    });
}

const select = (state) => {
  return {
    ...state.note
  }
}

export default Connect(select)(NoteComponent);
