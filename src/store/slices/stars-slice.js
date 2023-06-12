import { createSlice } from '@reduxjs/toolkit';

const starsSlice = createSlice({
  name: 'stars',
  initialState: [],
  reducers: {
    addStar(state, action) {
      state.push(action.payload);
    },
    removeStar(state, action) {
      return state.filter(star => star !== action.payload);
    },
    setInitState(state) {
      state = [];
    },
  },
});

export default starsSlice;
export const starsActions = starsSlice.actions;
