import { Link } from 'react-router-dom';
import { useFetchHotelsQuery } from '../store';
import { useSelector } from 'react-redux';

import StarFilter from '../components/StarFilter';
import PopularFilter from '../components/PopularFilter';
import SliderFilter from '../components/SliderFilter';

function HotelsPage() {
  const stars = useSelector(state => state.stars);
  const popularFilter = useSelector(state => state.popularFilter);

  const minValue = useSelector(state => state.minValue.value);
  const maxValue = useSelector(state => state.maxValue.value);

  const { data, error, isLoading } = useFetchHotelsQuery();

  let renderedHotels;

  if (isLoading) {
    return <div>Loading data</div>;
  } else if (error) {
    return <div>Error loading data.</div>;
  } else {
    let hotels = data;
    hotels = hotels.filter(hotel => {
      return (
        hotel.rooms[0].price >= minValue &&
        hotel.rooms[0].price <=
          (maxValue === 2000 ? Number.MAX_VALUE : maxValue)
      );
    });
    if (popularFilter.length > 0) {
      hotels = hotels.filter(hotel => {
        let result = false;
        let prev = true;
        popularFilter.forEach(element => {
          if (hotel.amenities.includes(element)) {
            result = prev ? true : false;
            prev = result ? true : false;
          } else {
            result = false;
            prev = false;
          }
        });
        return result;
      });
    }
    if (stars.length > 0) {
      hotels = hotels.filter(hotel => stars.includes(hotel.stars));
    }

    renderedHotels = hotels.map(hotel => {
      return (
        <div key={hotel.id}>
          <Link to={`/hotels/${hotel.to}`} className="link" target="_blank">
            <div className="hotel-show">
              <div className="hotel-show-img">
                <img src={hotel.picUrl} alt="" />
              </div>
              <div className="hotel-show-data">
                <div>
                  <h2 style={{ marginBottom: '3px' }}>{hotel.name}</h2>
                  <h5 style={{ marginTop: '1px', color: 'gray' }}>New York</h5>
                </div>
                <div>
                  <h2>${hotel.rooms[0].price}</h2>
                </div>
              </div>
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
        <div>
          <SliderFilter />
        </div>
      </div>
      <div className="hotels-list">{renderedHotels}</div>
    </div>
  );
}

export default HotelsPage;
