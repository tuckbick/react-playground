import Constants from '../constants';

const recentNotesReducer = (state = {
  isFetching: false,
  notes: []
}, action) => {
  switch (action.type) {

    case Constants.RECENT_NOTES_REQUEST:
      return {
        ...state,
        isFetching: true
      };
      break;

    case Constants.RECENT_NOTES_RECEIVE:
      return {
        ...state,
        isFetching: false,
        notes: action.notes
      };
      break;

    default:
      return state;
  }
};

export default recentNotesReducer;
