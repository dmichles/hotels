import { useSearchParams } from 'react-router-dom';

function ReservationPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <div>
      {searchParams.get('start')}-{searchParams.get('end')}
      {searchParams.get('roomId')}
    </div>
  );
}
export default ReservationPage;
