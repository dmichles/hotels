import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DateTime } from 'luxon';
import { useNavigate } from 'react-router-dom';
import Room from '../../components/Room/Room';
import Datepickers from '../../components/Datepickers/Datepickers';
import Travelers from '../../components/Travelers/Travelers';
import { startDateActions } from '../../store/slices/startDate-slice';
import { endDateActions } from '../../store/slices/endDate-slice';
import { travelersActions } from '../../store/slices/travelers-slice';
import { daysSliceActions } from '../../store/slices/days-slice';
import { useFetchRoomsQuery } from '../../store';
import { useChangeReservationMutation } from '../../store';
import './changereservation.css';

function ChangeReservationPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [changeReservation, results] = useChangeReservationMutation();

  const { id, startDate, endDate, name, travelers, to, url } = location.state;

  useEffect(() => {
    dispatch(startDateActions.setStartDate(startDate));
    dispatch(endDateActions.setEndDate(endDate));

    dispatch(travelersActions.setTravelers(Number(travelers)));
  }, []);

  const days = useSelector(state => state.days.value);

  const sDate = DateTime.fromISO(
    useSelector(state => state.startDate.date)
  ).toJSDate();
  const eDate = DateTime.fromISO(
    useSelector(state => state.endDate.date)
  ).toJSDate();

  const travs = useSelector(state => state.travelers.value);

  const start = DateTime.fromJSDate(sDate);

  const end = DateTime.fromJSDate(eDate);

  let numDays = end.diff(start, 'days');

  numDays = Math.round(numDays.values.days);

  useEffect(() => {
    if (numDays !== days) {
      dispatch(daysSliceActions.setDays(numDays));
    }
  }, [numDays]);

  const onChange = async roomId => {
    const reservation = {
      id: id,
      startDate: DateTime.fromJSDate(sDate).toISODate(),
      endDate: DateTime.fromJSDate(eDate).toISODate(),
      roomId: roomId,
      travelers: travs,
    };

    const data = await changeReservation(reservation).unwrap();

    navigate('/reservation', {
      state: {
        id: data.id,
        start: data.startDate,
        end: data.endDate,
        type: data.room.type,
        hotel: name,
        url: url,
        travelers: data.travelers,
      },
    });
  };

  const fetchedRooms = useFetchRoomsQuery(to);
  let renderedRooms;
  if (fetchedRooms.isLoading) {
    console.log('Loading data');
  } else if (fetchedRooms.error) {
    console.log('Error loading data');
  } else {
    const rooms = fetchedRooms.data.filter(room => {
      console.log(room.type, room.price);
      if (travs <= Number(room.people)) {
        return true;
      }
      return false;
    });

    renderedRooms = rooms.map(room => {
      return (
        <Room
          key={room.id}
          room={room}
          days={days}
          onReserve={onChange}
          buttonLabel="Change"
        />
      );
    });
  }

  return (
    <div className="hotel">
      <div>
        <div className="change-title">Change your reservation</div>
        <div className="hotel-datepickers">
          <Datepickers />
          <Travelers />
        </div>
      </div>
      <div className="room-list">{renderedRooms}</div>
    </div>
  );
}
export default ChangeReservationPage;
