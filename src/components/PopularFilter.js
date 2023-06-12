import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { popularFilterActions } from '../store/slices/popularFilter-slice';
import { popularFilterFlagActions } from '../store/slices/popularFilterFlag-slice';

function PopularFilter() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!checked1 && !checked2 && !checked3 && !checked4) {
      dispatch(popularFilterFlagActions.setPopularFilterFlag(false));
    } else {
      dispatch(popularFilterFlagActions.setPopularFilterFlag(true));
    }
  }, [checked1, checked2, checked3, checked4]);

  useEffect(() => {
    if (checked1) {
      dispatch(popularFilterActions.addFilter('Pool'));
    } else {
      dispatch(popularFilterActions.removeFilter('Pool'));
    }
  }, [checked1]);

  useEffect(() => {
    if (checked2) {
      dispatch(popularFilterActions.addFilter('Pet friendly'));
    } else {
      dispatch(popularFilterActions.removeFilter('Pet friendly'));
    }
  }, [checked2]);

  useEffect(() => {
    if (checked3) {
      dispatch(popularFilterActions.addFilter('Parking'));
    } else {
      dispatch(popularFilterActions.removeFilter('Parking'));
    }
  }, [checked3]);

  useEffect(() => {
    if (checked4) {
      dispatch(popularFilterActions.addFilter('Spa'));
    } else {
      dispatch(popularFilterActions.removeFilter('Spa'));
    }
  }, [checked4]);

  return (
    <div>
      <div style={{ marginTop: '20px' }}>Popular filters</div>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          onChange={() => setChecked1(!checked1)}
          checked={checked1}
        />
        <label htmlFor="checkbox1">Pool</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox2"
          onChange={() => setChecked2(!checked2)}
          checked={checked2}
        />
        <label htmlFor="checkbox2">Pet friendly</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox3"
          onChange={() => setChecked3(!checked3)}
          checked={checked3}
        />
        <label htmlFor="checkbox3">Parking</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox4"
          onChange={() => setChecked4(!checked4)}
          checked={checked4}
        />
        <label htmlFor="checkbox4">Spa</label>
      </div>
    </div>
  );
}

export default PopularFilter;
