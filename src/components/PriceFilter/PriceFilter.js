import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MultiRangeSlider from 'multi-range-slider-react';
import { minPriceActions } from '../../store/slices/minPrice-slice';
import { maxPriceActions } from '../../store/slices/maxPrice-slice';
import './pricefilter.css';

function PriceFilter() {
  const dispatch = useDispatch();
  const minPrice = useSelector(state => state.minPrice.value);
  const maxPrice = useSelector(state => state.maxPrice.value);

  useEffect(() => {
    dispatch(minPriceActions.setMinValue(0));
    dispatch(maxPriceActions.setMaxValue(2000));
  }, []);

  const handleInput = e => {
    dispatch(minPriceActions.setMinValue(e.minValue));
    dispatch(maxPriceActions.setMaxValue(e.maxValue));
  };
  return (
    <div>
      <div className="title">Price per night</div>
      <MultiRangeSlider
        baseClassName="multi-range-slider"
        className="slider-box"
        ruler={false}
        barInnerColor="#f0f0f0"
        thumbLeftColor="#f0f0f0"
        thumbRightColor="#f0f0f0"
        minCaption={'$' + minPrice}
        maxCaption={maxPrice === 2000 ? '$2000+' : '$' + maxPrice}
        labels={['$0', '$2000+']}
        min={0}
        max={2000}
        minValue={minPrice}
        maxValue={maxPrice}
        onInput={handleInput}
        step={100}
        stepOnly={true}
      />
    </div>
  );
}

export default PriceFilter;
