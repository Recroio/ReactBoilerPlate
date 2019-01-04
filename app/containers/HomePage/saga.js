/* eslint-disable no-console */
/* eslint-disable no-alert */
/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS, LOAD_SIMPLY } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import { LOADER_SHOW, LOADER_HIDE } from 'components/common_constant';
import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { Config } from 'config';
import { Api } from 'utils/apiUrls';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = Api.getHubURL.replace(':username', username);
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getLoad() {
  try {
    yield put({ type: LOADER_SHOW });
    console.log(Config.baseURL);
  } catch (e) {
    yield put({ type: LOADER_HIDE });
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOAD_SIMPLY, getLoad);
}
