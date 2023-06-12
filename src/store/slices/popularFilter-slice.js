import { createSlice } from '@reduxjs/toolkit';

const popularFilterSlice = createSlice({
  name: 'popularFilter',
  initialState: [],
  reducers: {
    addFilter(state, action) {
      state.push(action.payload);
    },
    removeFilter(state, action) {
      return state.filter(filter => filter !== action.payload);
    },
    setInitState(state) {
      state = [];
    },
  },
});

export default popularFilterSlice;
export const popularFilterActions = popularFilterSlice.actions;
