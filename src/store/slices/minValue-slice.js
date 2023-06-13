import { createSlice } from '@reduxjs/toolkit';

const minValueSlice = createSlice({
  name: 'minValue',
  initialState: { value: 0 },
  reducers: {
    setMinValue(state, action) {
      state.value = action.payload;
    },
  },
});

export default minValueSlice;
export const minValueActions = minValueSlice.actions;
