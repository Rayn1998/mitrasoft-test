import { createSlice, createAction } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts(state, { payload }) {
      state.posts = payload;
    },
  },
});

export const getPostsSaga = createAction('posts/getPostsSaga');

export const { getPosts } = postsSlice.actions;
export default postsSlice.reducer;