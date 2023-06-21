import { createSlice } from '@reduxjs/toolkit';

const ratingSlice = createSlice({
  name: 'rating',
  initialState: { value: 'Any' },
  reducers: {
    setRating(state, action) {
      state.value = action.payload;
    },
  },
});

export default ratingSlice;
export const ratingActions = ratingSlice.actions;
