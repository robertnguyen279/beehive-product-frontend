import { takeEvery, call, put, fork, takeLatest } from 'redux-saga/effects';
import * as actions from 'actions/users';
import * as api from 'api/users';
import { Action } from 'types';

function* getUser() {
  try {
    const result = yield call(api.getUser);
    yield put(actions.getUserSuccess({ ...result.data.user }));
  } catch (e) {
    yield put(actions.getUserError());
  }
}

function* watchGetUsers() {
  yield takeEvery(actions.Types.GET_USER, getUser);
}

function* loginUser(action: Action) {
  try {
    const result = yield call(api.loginUser, action.payload);
    localStorage.setItem('beehive-auth', result.data.token);
    yield put(actions.getUserSuccess({ ...result.data.user }));
  } catch (e) {
    console.log(e.data);
  }
}

function* watchLoginUser() {
  yield takeLatest(actions.Types.LOGIN_USER, loginUser);
}

const userSagas = [fork(watchGetUsers), fork(watchLoginUser)];

export default userSagas;
