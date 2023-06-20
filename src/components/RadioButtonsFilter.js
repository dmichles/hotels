import { useState } from 'react';

function RadioButtonsFilter() {
  const [value, setValue] = useState('Any');
  const handleChange = event => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="radio-buttons-filter">
      <div style={{ fontWeight: 'bold', marginBottom: '15px' }}>
        Guest rating
      </div>
      <div style={{ marginBottom: '5px' }}>
        <input
          type="radio"
          value="Any"
          name="rating"
          checked={value === 'Any'}
          onChange={handleChange}
        ></input>
        <label htmlFor="Any" className="label">
          Any
        </label>
      </div>
      <div style={{ marginBottom: '5px' }}>
        <input
          type="radio"
          value="Excellent 9+"
          name="rating"
          checked={value === 'Excellent 9+'}
          onChange={handleChange}
        ></input>
        <label htmlFor="Excellent 9+" className="label">
          Excellent 9+
        </label>
      </div>
      <div style={{ marginBottom: '5px' }}>
        <input
          type="radio"
          value="Very good 8+"
          name="rating"
          checked={value === 'Very good 8+'}
          onChange={handleChange}
        ></input>
        <label htmlFor="Very good 8+" className="label">
          Very good 8+
        </label>
      </div>
    </div>
  );
}
export default RadioButtonsFilter;
