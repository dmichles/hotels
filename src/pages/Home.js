import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DateTime } from 'luxon';
import LocationBox from '../components/LocationBox/LocationBox';
import Travelers from '../components/Travelers/Travelers';
import Datepickers from '../components/Datepickers/Datepickers';
import { endDateActions } from '../store/slices/endDate-slice';
import { startDateActions } from '../store/slices/startDate-slice';
import { travelersActions } from '../store/slices/travelers-slice';
import travelpic from '../assets/images/pic.jpg';
import './home.css';

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      endDateActions.setEndDate(
        DateTime.fromJSDate(new Date(new Date().getTime() + 86400000)).toISO()
      )
    );
    dispatch(
      startDateActions.setStartDate(DateTime.fromJSDate(new Date()).toISO())
    );

    dispatch(travelersActions.setTravelers(2));
  }, []);

  const location = useSelector(state => state.location.value);
  const startDate = DateTime.fromISO(
    useSelector(state => state.startDate.date)
  ).toJSDate();
  const endDate = DateTime.fromISO(
    useSelector(state => state.endDate.date)
  ).toJSDate();

  const travelers = useSelector(state => state.travelers.value);

  const doSearch = () => {
    if (location !== '') {
      navigate('/hotels');
    }
  };

  return (
    <div style={{ margin: 'auto', maxWidth: '900px' }}>
      <div
        style={{
          display: 'flex',
          gap: '5px',
        }}
      >
        <div>
          <LocationBox />
        </div>
        <div>
          <Datepickers />
        </div>
        <div>
          <Travelers />
        </div>
        <div>
          <button className='btn-search' onClick={doSearch}>
            Search
          </button>
        </div>
      </div>
      <img className='image' src={travelpic}></img>
    </div>
  );
}

export default HomePage;
