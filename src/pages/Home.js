import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DateTime } from 'luxon';
import LocationBox from '../components/LocationBox/LocationBox';
import Travelers from '../components/Travelers/Travelers';
import Datepickers from '../components/Datepickers/Datepickers';
import travelpic from '../images/pic.jpg';
import './home.css';

function HomePage() {
  const navigate = useNavigate();

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
