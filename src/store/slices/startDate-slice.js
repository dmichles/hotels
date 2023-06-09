import { createSlice } from '@reduxjs/toolkit';
import { DateTime } from 'luxon';

const startDateSlice = createSlice({
  name: 'startDate',
  initialState: { date: DateTime.fromJSDate(new Date()).toISO() },
  reducers: {
    setStartDate(state, action) {
      state.date = action.payload;
    },
  },
});

export default startDateSlice;
export const startDateActions = startDateSlice.actions;
