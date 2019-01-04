/**
 * LoaderPage selectors
 */

import { createSelector } from 'reselect';
import { initialStateCommon } from '../common_reducer';

const selectLoader = state => state.get('loader', initialStateCommon);

const toggleBoolCB = () =>
  createSelector(selectLoader, loaderState => loaderState.get('loaderStatus'));

export { selectLoader, toggleBoolCB };
