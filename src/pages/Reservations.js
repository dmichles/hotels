import {
  useFetchReservationsQuery,
  useDeleteReservationMutation,
} from '../store';

const ReservationsPage = () => {
  const [deleteReservation, results] = useDeleteReservationMutation();

  const handleClick = reservation => {
    deleteReservation(reservation.id);
  };

  const fetchedReservations = useFetchReservationsQuery();

  let reservations;
  let flag = false;
  if (fetchedReservations.isLoading) {
    console.log('Data is loading');
  } else if (fetchedReservations.error) {
    console.log('Error loading data');
  } else {
    if (fetchedReservations.data) console.log('blah');
    if (fetchedReservations.data.length > 0) flag = true;
    reservations = fetchedReservations.data.map(reservation => {
      return (
        <tr key={reservation.id}>
          <td>{reservation.startDate}</td>
          <td>{reservation.endDate}</td>
          <td>{reservation.type}</td>
          <td>{reservation.name}</td>
          <td>
            <button onClick={() => handleClick(reservation)}>Cancel</button>
          </td>
        </tr>
      );
    });
  }

  let content = <h1>You have no reservations</h1>;
  if (flag) {
    content = (
      <div>
        <h1>Your Reservations</h1>
        <table>
          <thead>
            <tr>
              <th>Start date</th>
              <th>End date</th>
              <th>Room type</th>
              <th>Hotel</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>{reservations}</tbody>
        </table>
      </div>
    );
  }
  return <div className="reservations">{content}</div>;
};

export default ReservationsPage;
