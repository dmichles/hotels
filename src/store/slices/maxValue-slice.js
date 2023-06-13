import { createSlice } from '@reduxjs/toolkit';

const maxValueSlice = createSlice({
  name: 'maxValue',
  initialState: { value: 2000 },
  reducers: {
    setMaxValue(state, action) {
      state.value = action.payload;
    },
  },
});

export default maxValueSlice;
export const maxValueActions = maxValueSlice.actions;
