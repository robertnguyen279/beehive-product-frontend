import { takeEvery, call, put, fork, takeLatest } from 'redux-saga/effects';
import * as actions from 'actions/users';
import * as api from 'api/users';
import { Action } from 'types';
import { v4 as uuid } from 'uuid';

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
    const { email, password, remember } = action.payload;
    const result = yield call(api.loginUser, { email, password });
    if (remember) {
      localStorage.setItem('beehive-auth', result.data.token);
    }
    yield put(actions.getUserSuccess({ ...result.data.user }));
  } catch (e) {
    if (e.response.data.message.includes('Incorrect password')) {
      yield put(actions.loginUserError('Incorrect password - ' + uuid()));
    }
  }
}

function* watchLoginUser() {
  yield takeLatest(actions.Types.LOGIN_USER, loginUser);
}

const userSagas = [fork(watchGetUsers), fork(watchLoginUser)];

export default userSagas;
