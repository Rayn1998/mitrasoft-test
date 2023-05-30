import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { getPosts } from '../slices/postsSlice';

function* getPostsWorker() {
  const data = yield axios('https://jsonplaceholder.typicode.com/posts');
  yield put(getPosts(data.data));
}

function* postsWatcher() {
  yield takeEvery('posts/getPostsSaga', getPostsWorker);
}

export default postsWatcher;