import { createSlice } from '@reduxjs/toolkit';

const popularFilterFlagSlice = createSlice({
  name: 'popularFilterFlag',
  initialState: { flag: false },
  reducers: {
    setPopularFilterFlag(state, action) {
      state.flag = action.payload;
    },
  },
});

export default popularFilterFlagSlice;
export const popularFilterFlagActions = popularFilterFlagSlice.actions;
