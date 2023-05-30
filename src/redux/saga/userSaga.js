import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { getUser } from '../slices/userSlice';

function* getUserWorker({ id }) {
  const data = yield axios(`https://jsonplaceholder.typicode.com/users?id=${id}`);
  yield put(getUser(data.data[0]));
}

function* userWatcher() {
  yield takeEvery('FETCH_USER', getUserWorker);
}

export default userWatcher;