import { createSlice } from '@reduxjs/toolkit';

const starSlice = createSlice({
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
      return state.filter(star => {
        return false;
      });
    },
  },
});
