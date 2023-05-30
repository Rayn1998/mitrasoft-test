import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser(state, { payload }) {
      state.user = payload;
    },
  },
});

export function getUserSaga(id) {
  return {
    type: 'FETCH_USER',
    id
  }
}

export const { getUser } = userSlice.actions;
export default userSlice.reducer;