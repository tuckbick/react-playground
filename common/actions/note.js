import Constants from '../constants';
import Api from './api';

export default {

  /* ACTION CREATORS */
  requestNote (id) {
    return {
      type: Constants.NOTE_REQUEST,
      id
    }
  },

  receiveNote (json) {
    return {
      type: Constants.NOTE_RECEIVE,
      note: json
    }
  }


};
