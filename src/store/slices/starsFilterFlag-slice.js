import { createSlice } from '@reduxjs/toolkit';

const starsFilterFlagSlice = createSlice({
  name: 'starsFilterFlag',
  initialState: { flag: false },
  reducers: {
    setStarFilterFlag(state, action) {
      state.flag = action.payload;
    },
  },
});

export default starsFilterFlagSlice;
export const starsFilterFlagActions = starsFilterFlagSlice.actions;
