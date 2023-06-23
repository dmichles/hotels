import { createSlice } from '@reduxjs/toolkit';

const minPriceSlice = createSlice({
  name: 'minPrice',
  initialState: { value: 0 },
  reducers: {
    setMinValue(state, action) {
      state.value = action.payload;
    },
  },
});

export default minPriceSlice;
export const minPriceActions = minPriceSlice.actions;
