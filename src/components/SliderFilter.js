import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MultiRangeSlider from 'multi-range-slider-react';
import { minValueActions } from '../store/slices/minValue-slice';
import { maxValueActions } from '../store/slices/maxValue-slice';

function SliderFilter() {
  const dispatch = useDispatch();
  const minValue = useSelector(state => state.minValue.value);
  const maxValue = useSelector(state => state.maxValue.value);

  useEffect(() => {
    dispatch(minValueActions.setMinValue(0));
    dispatch(maxValueActions.setMaxValue(2000));
  }, []);

  const handleInput = e => {
    dispatch(minValueActions.setMinValue(e.minValue));
    dispatch(maxValueActions.setMaxValue(e.maxValue));
  };
  return (
    <div>
      <div
        style={{ marginTop: '25px', marginBottom: '20px', fontWeight: 'bold' }}
      >
        Price per night
      </div>
      <MultiRangeSlider
        ruler={false}
        style={{ border: 'none', boxShadow: 'none', color: 'white' }}
        barInnerColor="#f0f0f0"
        thumbLeftColor="#f0f0f0"
        thumbRightColor="#f0f0f0"
        minCaption={'$' + minValue}
        maxCaption={maxValue === 2000 ? '$2000+' : '$' + maxValue}
        labels={['$0', '$2000+']}
        min={0}
        max={2000}
        minValue={minValue}
        maxValue={maxValue}
        onInput={handleInput}
        step={100}
        stepOnly={true}
      />
    </div>
  );
}

export default SliderFilter;
