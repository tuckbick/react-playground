import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
/*
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
*/

import note from './note';
import recentNotes from './recentNotes';

export default combineReducers({
  note,
  recentNotes,
  routerStateReducer
});

// export default function createRootStore (data = {}) {
//   const rootReducer = combineReducers({
//     note,
//     recentNotes
//   });
//   return applyMiddleware(thunk)(createStore)(rootReducer, data);
// };
