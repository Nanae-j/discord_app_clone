import { createSlice } from '@reduxjs/toolkit';
import { InitialUserState } from '../../app/Types';

const initialState: InitialUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState, //initialState: initialStateの意
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// console.log(userSlice);

export default userSlice.reducer;
