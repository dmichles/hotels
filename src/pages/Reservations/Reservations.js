import { DateTime } from 'luxon';
import { useNavigate } from 'react-router-dom';
import {
  useFetchReservationsQuery,
  useDeleteReservationMutation,
} from '../../store';
import './reservations.css';

const ReservationsPage = () => {
  const [deleteReservation, results] = useDeleteReservationMutation();

  const navigate = useNavigate();

  const handleCancel = reservation => {
    deleteReservation(reservation.id);
  };

  const handleChange = reservation => {
    navigate('/changereservation', {
      state: {
        id: reservation.id,
        startDate: reservation.startDate,
        endDate: reservation.endDate,
        travelers: reservation.travelers,
        name: reservation.name,
        to: reservation.to,
        roomId: reservation.roomId,
        url: reservation.url,
      },
    });
  };

  const fetchedReservations = useFetchReservationsQuery();

  let reservations;
  let flag = false;
  if (fetchedReservations.isLoading) {
    console.log('Data is loading');
  } else if (fetchedReservations.error) {
    console.log('Error loading data');
  } else {
    if (fetchedReservations.data.length > 0) flag = true;
    reservations = fetchedReservations.data.map(reservation => {
      return (
        <div className="reservation-card" key={reservation.id}>
          <div>
            <img src={reservation.url} alt=""></img>
          </div>
          <div className="reservation-data">
            <div className="reservation-hotel">{reservation.name}</div>
            <div className="reservation-date-title">Reservation dates</div>
            <div className="reservation-dates">
              {DateTime.fromISO(reservation.startDate).toFormat(
                'MMMM dd, yyyy'
              )}
              -{DateTime.fromISO(reservation.endDate).toFormat('MMMM dd, yyyy')}
            </div>
            <div className="reservation-travelers-title">Travelers</div>
            <div className="reservation-travelers">{reservation.travelers}</div>
            <div className="reservation-buttons">
              <button onClick={() => handleCancel(reservation)}>Cancel</button>
              <button onClick={() => handleChange(reservation)}>Change</button>
            </div>
          </div>
        </div>
      );
    });
  }

  let content = <h1>You have no reservations</h1>;
  if (flag) {
    content = (
      <div>
        <h1>Your Reservations</h1>
        <div className="reservations-container">{reservations}</div>
      </div>
    );
  }
  return <div className="reservations">{content}</div>;
};

export default ReservationsPage;
