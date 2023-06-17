import { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { endDateActions } from '../store/slices/endDate-slice';
import { startDateActions } from '../store/slices/startDate-slice';
import HotelInfo from '../components/HotelInfo';
import Datepickers from '../components/Datepickers';
import Room from '../components/Room';
import { DateTime } from 'luxon';
import {
  useFetchHotelQuery,
  useFetchRoomsQuery,
  useAddReservationMutation,
} from '../store';
import { daysSliceActions } from '../store/slices/days-slice';

function HotelPage() {
  const params = useParams();
  const [addReservation, results] = useAddReservationMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [queryParameters] = useSearchParams();

  useEffect(() => {
    dispatch(startDateActions.setStartDate(queryParameters.get('chkin')));
    dispatch(endDateActions.setEndDate(queryParameters.get('chkout')));
  }, []);

  const days = useSelector(state => state.days.value);

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

  useEffect(() => {
    if (numDays !== days) {
      dispatch(daysSliceActions.setDays(numDays));
    }
  }, [numDays]);

  const { data, error, isLoading } = useFetchHotelQuery(params.to);
  let hotelInfo, hotel;
  if (isLoading) {
    console.log('Loading data');
  } else if (error) {
    console.log('Error loading data');
  } else if (!isLoading) {
    hotel = data;

    hotelInfo = (
      <div>
        <HotelInfo
          name={hotel.name}
          stars={hotel.stars}
          amenities={hotel.amenities}
          rating={hotel.rating}
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
          hotel: hotel.name,
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
        <div className="subheader">Choose your room</div>
        <Datepickers />
      </div>
      <div className="room-list">{renderedRooms}</div>
    </div>
  );
}

export default HotelPage;
