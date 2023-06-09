import { useFetchReservationsQuery } from '../store';

const ReservationsPage = () => {
  const handleClick = reservation => {
    // const reservation = e.target.getAtrribute('data-value');
    console.log(reservation);
  };

  const fetchedReservations = useFetchReservationsQuery();

  let reservations;
  if (fetchedReservations.isLoading) {
    console.log('Data is loading');
  } else if (fetchedReservations.error) {
    console.log('Error loading data');
  } else {
    reservations = fetchedReservations.data.map(reservation => {
      return (
        <tr>
          <td>{reservation.startDate}</td>
          <td>{reservation.endDate}</td>
          <td>{reservation.type}</td>
          <td>{reservation.name}</td>
          <td>
            <button onClick={() => handleClick(reservation)}>Manage</button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="reservations">
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
};

export default ReservationsPage;
