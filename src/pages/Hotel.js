import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, createSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { endDateActions } from '../store/slices/endDate-slice';
import { startDateActions } from '../store/slices/startDate-slice';
import HotelInfo from '../components/HotelInfo';
import Datepickers from '../components/Datepickers';
import Room from '../components/Room';
import { DateTime } from 'luxon';
import {
  useFetchHotelQuery,
  useFetchAmenitiesQuery,
  useFetchRoomsQuery,
  useAddReservationMutation,
} from '../store';

function HotelPage() {
  const params = useParams();
  const [addReservation, results] = useAddReservationMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [days, setDays] = useState(1);

  useEffect(() => {
    dispatch(
      endDateActions.setEndDate(
        DateTime.fromJSDate(new Date(new Date().getTime() + 86400000)).toISO()
      )
    );
    dispatch(
      startDateActions.setStartDate(DateTime.fromJSDate(new Date()).toISO())
    );
  }, []);

  const startDate = DateTime.fromISO(
    useSelector(state => state.startDate.date)
  ).toJSDate();
  const endDate = DateTime.fromISO(
    useSelector(state => state.endDate.date)
  ).toJSDate();

  const start = DateTime.fromJSDate(startDate);

  const end = DateTime.fromJSDate(endDate);

  let numDays = end.diff(start, 'days');

  numDays = Math.round(numDays.values.days);
  if (numDays !== days) {
    setDays(numDays);
  }

  let amenities;
  const fetchedAmenities = useFetchAmenitiesQuery(params.to);

  if (fetchedAmenities.isLoading) {
    console.log('Loading data');
  } else if (fetchedAmenities.error) {
    console.log('Error loading data');
  } else {
    amenities = fetchedAmenities.data;
  }

  const { data, error, isLoading } = useFetchHotelQuery(params.to);
  let hotelInfo;
  if (isLoading) {
    console.log('Loading data');
  } else if (error) {
    console.log('Error loading data');
  } else if (!isLoading && !fetchedAmenities.isLoading) {
    const hotel = data;
    hotelInfo = (
      <div>
        <HotelInfo
          name={hotel.name}
          stars={hotel.stars}
          amenities={amenities}
        />
      </div>
    );
  }

  const onReserve = async roomId => {
    // const url = 'http://localhost:8080/addReservation';
    // await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     startDate: DateTime.fromJSDate(startDate).toISODate(),
    //     endDate: DateTime.fromJSDate(endDate).toISODate(),
    //     roomId: id,
    //   }),
    // });
    const reservation = {
      startDate: DateTime.fromJSDate(startDate).toISODate(),
      endDate: DateTime.fromJSDate(endDate).toISODate(),
      roomId: roomId,
    };
    const data = await addReservation(reservation).unwrap();

    navigate(
      '/reservation',
      // search: createSearchParams({
      //   start: startDate.current,
      //   end: endDate.current,
      //   type: type,
      // }).toString(),
      {
        state: {
          id: data.id,
          start: data.startDate,
          end: data.endDate,
          type: data.room.type,
          hotel: data.room.hotel.name,
          url: data.room.picUrl,
        },
      }
    );
  };

  const fetchedRooms = useFetchRoomsQuery(params.to);
  let renderedRooms;
  if (fetchedRooms.isLoading) {
    console.log('Loading data');
  } else if (fetchedRooms.error) {
    console.log('Error loading data');
  } else {
    renderedRooms = fetchedRooms.data.map(room => {
      return (
        <Room key={room.id} room={room} days={days} onReserve={onReserve} />
      );
    });
  }

  return (
    <div className="hotel">
      {hotelInfo}
      <div>
        <Datepickers />
      </div>
      <div className="room-list">{renderedRooms}</div>
    </div>
  );
}

export default HotelPage;
