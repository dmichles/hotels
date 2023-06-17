import { createSlice } from '@reduxjs/toolkit';

const travelersSlice = createSlice({
  name: 'travelers',
  initialState: { value: 2 },
  reducers: {
    setTravelers(state, action) {
      state.value = action.payload;
    },
    initState(state) {
      state.value = 2;
    },
  },
});

export default travelersSlice;
export const travelersActions = travelersSlice.actions;
