import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from 'actions/users';
import * as api from 'api/users';

function* getUser() {
  try {
    const result = yield call(api.getUser);
    yield put(actions.getUserSuccess({ ...result.data.user }));
  } catch (e) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USER, getUser);
}

const userSagas = [fork(watchGetUsersRequest)];

export default userSagas;
