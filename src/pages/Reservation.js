import { useSearchParams, useLocation } from 'react-router-dom';

function ReservationPage() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { id, start, end, type, hotel, url } = location.state;

  return (
    <div className="reservation">
      {/* {searchParams.get('start')}-{searchParams.get('end')}
      {searchParams.get('type')} */}
      <div style={{ fontSize: 25 }}>Reservation confirmation</div>
      <img src={url} alt="" />
      <div>Reservation number: {id}</div>
      <div>Check-in: {start}</div>
      <div>Check-out: {end}</div>
      <div>Accomodation: {type}</div>
      <div>Hotel: {hotel}</div>
    </div>
  );
}
export default ReservationPage;
