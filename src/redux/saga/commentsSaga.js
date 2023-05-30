import axios from 'axios';
import { takeEvery, put,  } from 'redux-saga/effects';
import { getComments } from '../slices/commentsSlice';

function* getCommentsWorker({ id }) {
  const data = yield axios(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`);
  yield put(getComments(data.data));
}

function* commentsWatcher() {
  yield takeEvery('FETCH_COMMENTS', getCommentsWorker);
}

export default commentsWatcher;