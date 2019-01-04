/*
 * Common.reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { LOADER_SHOW, LOADER_HIDE } from './common_constant';

// The initial state of the App
export const initialStateCommon = fromJS({
  loaderStatus: false,
});

function commonReducer(state = initialStateCommon, action) {
  switch (action.type) {
    case LOADER_SHOW:
      return state.set('loaderStatus', true);
    case LOADER_HIDE:
      return state.set('loaderStatus', false);
    default:
      return state;
  }
}

export default commonReducer;
