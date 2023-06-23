import { useFetchHotelsQuery } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DateTime } from 'luxon';
import StarFilter from '../../components/StarFilter/StarFilter';
import PopularFilter from '../../components/PopularFilter/PopularFilter';
import PriceFilter from '../../components/PriceFilter/PriceFilter';
import HotelsList from '../../components/HotelsList/HotelsList';
import Datepickers from '../../components/Datepickers/Datepickers';
import { endDateActions } from '../../store/slices/endDate-slice';
import { startDateActions } from '../../store/slices/startDate-slice';
import { daysSliceActions } from '../../store/slices/days-slice';
import Travelers from '../../components/Travelers/Travelers';
import RatingFilter from '../../components/RatingFilter/RatingFilter';
import './hotels.css';

function HotelsPage() {
  const stars = useSelector(state => state.stars);
  const popularFilter = useSelector(state => state.popularFilter);
  const rating = useSelector(state => state.rating.value);
  const minPrice = useSelector(state => state.minPrice.value);
  const maxPrice = useSelector(state => state.maxPrice.value);
  const travelers = useSelector(state => state.travelers.value);
  const dispatch = useDispatch();

  const mapRating = new Map();
  mapRating.set('Very good 8+', 8);
  mapRating.set('Excellent 9+', 9);

  // useEffect(() => {
  //   dispatch(
  //     endDateActions.setEndDate(
  //       DateTime.fromJSDate(new Date(new Date().getTime() + 86400000)).toISO()
  //     )
  //   );
  //   dispatch(
  //     startDateActions.setStartDate(DateTime.fromJSDate(new Date()).toISO())
  //   );
  // }, []);

  const startDate = DateTime.fromISO(
    useSelector(state => state.startDate.date)
  ).toJSDate();
  const endDate = DateTime.fromISO(
    useSelector(state => state.endDate.date)
  ).toJSDate();

  const days = useSelector(state => state.days.value);

  const start = DateTime.fromJSDate(startDate);

  const end = DateTime.fromJSDate(endDate);

  let numDays = end.diff(start, 'days');

  numDays = Math.round(numDays.values.days);

  useEffect(() => {
    if (numDays !== days) {
      dispatch(daysSliceActions.setDays(numDays));
    }
  }, [numDays]);

  const { data, error, isLoading } = useFetchHotelsQuery();

  if (isLoading) {
    return <div>Loading data</div>;
  } else if (error) {
    return <div>Error loading data.</div>;
  } else {
    let hotels = data;
    hotels = hotels.map(hotel => ({ ...hotel, price: null }));

    hotels = hotels.filter(hotel => {
      for (let i = 0; i < hotel.rooms.length; i++) {
        if (
          travelers <= Number(hotel.rooms[i].people) &&
          hotel.rooms[i].price >= minPrice &&
          hotel.rooms[i].price <=
            (maxPrice === 2000 ? Number.MAX_VALUE : maxPrice)
        ) {
          console.log(hotel.name, hotel.rooms[i].price);
          hotel.price = hotel.rooms[i].price;
          return true;
        }
      }
      return false;
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
    if (rating !== 'Any') {
      hotels = hotels.filter(hotel => hotel.rating >= mapRating.get(rating));
    }

    return (
      <div className="hotels">
        <div className="hotels-datepickers">
          <div>
            <Datepickers />
          </div>
          <div>
            <Travelers />
          </div>
        </div>
        <div className="hotels-content">
          <div className="hotels-filter">
            <div className="hotels-filter-heading">Filter by</div>
            <div>
              <StarFilter />
            </div>
            <div>
              <PopularFilter />
            </div>
            <div>
              <PriceFilter />
            </div>
            <div>
              <RatingFilter />
            </div>
          </div>
          <HotelsList
            hotels={hotels}
            days={days}
            chkin={DateTime.fromJSDate(startDate).toISODate()}
            chkout={DateTime.fromJSDate(endDate).toISODate()}
            travelers={travelers}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </div>
      </div>
    );
  }
}

export default HotelsPage;
