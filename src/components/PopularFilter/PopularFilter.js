import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { popularFilterActions } from '../../store/slices/popularFilter-slice';
import './popularfilter.css';

function PopularFilter() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popularFilterActions.setInitState());
  }, []);

  const handleChange1 = flag => {
    setChecked1(flag);
    if (flag) {
      dispatch(popularFilterActions.addFilter('Pool'));
    } else {
      dispatch(popularFilterActions.removeFilter('Pool'));
    }
  };

  const handleChange2 = flag => {
    setChecked2(flag);
    if (flag) {
      dispatch(popularFilterActions.addFilter('Pet friendly'));
    } else {
      dispatch(popularFilterActions.removeFilter('Pet friendly'));
    }
  };

  const handleChange3 = flag => {
    setChecked3(flag);
    if (flag) {
      dispatch(popularFilterActions.addFilter('Parking available'));
    } else {
      dispatch(popularFilterActions.removeFilter('Parking available'));
    }
  };
  const handleChange4 = flag => {
    setChecked4(flag);
    if (flag) {
      dispatch(popularFilterActions.addFilter('Spa'));
    } else {
      dispatch(popularFilterActions.removeFilter('Spa'));
    }
  };

  return (
    <div>
      <div className="title">Popular filters</div>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          onChange={() => handleChange1(!checked1)}
          checked={checked1}
        />
        <label htmlFor="checkbox1" className="label">
          Pool
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox2"
          onChange={() => handleChange2(!checked2)}
          checked={checked2}
        />
        <label htmlFor="checkbox2" className="label">
          Pet friendly
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox3"
          onChange={() => handleChange3(!checked3)}
          checked={checked3}
        />
        <label htmlFor="checkbox3" className="label">
          Parking
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox4"
          onChange={() => handleChange4(!checked4)}
          checked={checked4}
        />
        <label htmlFor="checkbox4" className="label">
          Spa
        </label>
      </div>
    </div>
  );
}

export default PopularFilter;
