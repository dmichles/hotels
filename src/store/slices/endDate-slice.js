import { createSlice } from '@reduxjs/toolkit';
import { DateTime } from 'luxon';

const endDateSlice = createSlice({
  name: 'endDate',
  initialState: {
    date: DateTime.fromJSDate(
      new Date(new Date().getTime() + 86400000)
    ).toISO(),
  },
  reducers: {
    setEndDate(state, action) {
      state.date = action.payload;
    },
  },
});

export default endDateSlice;
export const endDateActions = endDateSlice.actions;
