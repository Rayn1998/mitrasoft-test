import { configureStore } from '@reduxjs/toolkit';
import posts from './slices/postsSlice';
import comments from './slices/commentsSlice';
import user from './slices/userSlice';
import loading from './slices/loadingSlice';

import createSagaMiddleware from 'redux-saga';
import rootWatcher from './saga/index.js';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts,
    comments,
    user,
    loading,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootWatcher);