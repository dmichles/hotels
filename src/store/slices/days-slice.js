import { createSlice } from '@reduxjs/toolkit';

const daysSlice = createSlice({
  name: 'days',
  initialState: { value: 1 },
  reducers: {
    setDays(state, action) {
      state.value = action.payload;
    },
    initDays(state) {
      state.value = 1;
    },
  },
});

export default daysSlice;
export const daysSliceActions = daysSlice.actions;
