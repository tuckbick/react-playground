import React, { Component } from 'react';
import { connect as Connect } from 'react-redux';

import Api from '../api';
import Constants from '../constants';
import NoteLink from './noteLink';

class IndexComponent extends Component {

  render() {
    return (
      <div>
        Recent notes:
        <ol>
          {this.props.notes.map((note) => {
            return <li><NoteLink note={note} /></li>
          })}
        </ol>
      </div>
    );
  }
}

IndexComponent.fetchData = (props, dispatch) => {
  dispatch({
    type: Constants.RECENT_NOTES_REQUEST
  });

  return Api.get('/n/recent')
    .then((result) => {

      dispatch({
        type: Constants.RECENT_NOTES_RECEIVE,
        notes: result
      });
    });
}

const select = (state) => {
  return {
    notes: state.recentNotes.notes
  }
}

export default Connect(select)(IndexComponent);
