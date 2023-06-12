import { Link } from 'react-router-dom';
import { useFetchHotelsQuery } from '../store';
import { useSelector } from 'react-redux';

import StarFilter from '../components/StarFilter';
import PopularFilter from '../components/PopularFilter';

function HotelsPage() {
  const stars = useSelector(state => state.stars);
  const starsFilterFlag = useSelector(state => state.starsFilterFlag.flag);
  const popularFilter = useSelector(state => state.popularFilter);
  console.log(popularFilter);
  const popularFilterFlag = useSelector(state => state.popularFilterFlag.flag);

  const { data, error, isLoading } = useFetchHotelsQuery();

  let renderedHotels;

  if (isLoading) {
    return <div>Loading data</div>;
  } else if (error) {
    return <div>Error loading data.</div>;
  } else {
    let hotels = data;
    if (popularFilterFlag) {
      hotels = hotels.filter(hotel => {
        if (popularFilterFlag) {
        }
        let result = false;
        hotel.amenities.forEach(element => {
          if (popularFilter.includes(element)) {
            result = true;
          }
        });
        return result;
      });
    }
    if (starsFilterFlag) {
      console.log(starsFilterFlag);
      hotels = hotels.filter(hotel => stars.includes(hotel.stars));
    }

    renderedHotels = hotels.map(hotel => {
      return (
        <div key={hotel.id}>
          <Link to={`/hotels/${hotel.to}`} className="link">
            <div className="hotel-show">
              <h2 style={{ marginBottom: '3px' }}>{hotel.name}</h2>
              <h5 style={{ marginTop: '1px', color: 'gray' }}>New York</h5>
              <img src={hotel.picUrl} alt="" />
            </div>
          </Link>
        </div>
      );
    });
  }
  return (
    <div className="hotels">
      <div className="hotels-filter">
        <div className="hotels-filter-heading">Filter by</div>
        <div>
          <StarFilter />
        </div>
        <div>
          <PopularFilter />
        </div>
      </div>
      <div className="hotels-list">{renderedHotels}</div>
    </div>
  );
}

export default HotelsPage;
