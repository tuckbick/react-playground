import Constants from '../constants';

const noteReducer = (state = {
  isFetching: false
}, action) => {
  switch (action.type) {

    case Constants.NOTE_REQUEST:
      return {
        ...state,
        isFetching: true
      };
      break;

    case Constants.NOTE_RECEIVE:
      return {
        ...state,
        isFetching: false,
        ...action.note
      };
      break;

    default:
      return state;
  }
};

export default noteReducer;
