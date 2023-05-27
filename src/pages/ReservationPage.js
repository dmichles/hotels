import { useSearchParams, useLocation } from 'react-router-dom';

function ReservationPage() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { start, end, type } = location.state;
  console.log(location);

  return (
    <div className="reservation">
      {/* {searchParams.get('start')}-{searchParams.get('end')}
      {searchParams.get('type')} */}
      {start} {end} {type}
    </div>
  );
}
export default ReservationPage;
