import { useSearchParams, useLocation } from 'react-router-dom';

function ReservationPage() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { start, end, type, hotel } = location.state;
  console.log(location);

  return (
    <div className="reservation">
      {/* {searchParams.get('start')}-{searchParams.get('end')}
      {searchParams.get('type')} */}
      {start} {end} {type} {hotel.name}
    </div>
  );
}
export default ReservationPage;
