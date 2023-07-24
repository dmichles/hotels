import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: { value: '' },
  reducers: {
    setLocation(state, action) {
      state.value = action.payload;
    },
  },
});

export default locationSlice;
export const locationSliceActions = locationSlice.actions;
