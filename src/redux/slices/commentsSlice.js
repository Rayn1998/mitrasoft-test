import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments(state, { payload }) {
      state.comments = payload;
    },
  },
});

export function getCommentsSaga(id) {
  return {
    type: 'FETCH_COMMENTS',
    id
  }
}

export const { getComments } = commentsSlice.actions;
export default commentsSlice.reducer;