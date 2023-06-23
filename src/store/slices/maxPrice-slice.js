import { createSlice } from '@reduxjs/toolkit';

const maxPriceSlice = createSlice({
  name: 'maxPrice',
  initialState: { value: 2000 },
  reducers: {
    setMaxValue(state, action) {
      state.value = action.payload;
    },
  },
});

export default maxPriceSlice;
export const maxPriceActions = maxPriceSlice.actions;
