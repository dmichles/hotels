import { useDispatch, useSelector } from 'react-redux';
import { ratingActions } from '../../store/slices/rating-sice';
import './ratingfilter.css';

function RatingFilter() {
  const dispatch = useDispatch();
  const rating = useSelector(state => state.rating.value);

  const handleChange = event => {
    dispatch(ratingActions.setRating(event.target.value));

    console.log(event.target.value);
  };

  return (
    <div className='rating-filter'>
      <div className='rating-filter-title'>Guest rating</div>
      <div className='radio-button-container'>
        <input
          type='radio'
          value='Any'
          name='rating'
          checked={rating === 'Any'}
          onChange={handleChange}
        ></input>
        <label htmlFor='Any' className='label'>
          Any
        </label>
      </div>
      <div className='radio-button-container'>
        <input
          type='radio'
          value='Excellent 9+'
          name='rating'
          checked={rating === 'Excellent 9+'}
          onChange={handleChange}
        ></input>
        <label htmlFor='Excellent 9+' className='label'>
          Excellent 9+
        </label>
      </div>
      <div className='radio-button-container'>
        <input
          type='radio'
          value='Very good 8+'
          name='rating'
          checked={rating === 'Very good 8+'}
          onChange={handleChange}
        ></input>
        <label htmlFor='Very good 8+' className='label'>
          Very good 8+
        </label>
      </div>
    </div>
  );
}
export default RatingFilter;
