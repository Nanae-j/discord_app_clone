import { createSlice } from '@reduxjs/toolkit';
import { InitialChannelState } from '../../app/Types';

const initialState: InitialChannelState = {
  channelId: null,
  channelName: null,
};

export const channelSlice = createSlice({
  name: 'channel',
  initialState, //initialState: initialStateの意
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

// console.log(userSlice);

export const { setChannelInfo } = channelSlice.actions;
export default channelSlice.reducer;
