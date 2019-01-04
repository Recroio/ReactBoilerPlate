/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialStateCommon } from 'components/common_reducer';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);
const selectLoader = state => state.get('loader', initialStateCommon);

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

const getLoaderSatus = () =>
  createSelector(selectLoader, loaderState => loaderState.get('loaderStatus'));

export { selectHome, selectLoader, makeSelectUsername, getLoaderSatus };
