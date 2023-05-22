import { useEffect, useContext, useState } from 'react';
import Link from '../components/Link';
import NavigationContext from '../context/navigation';

function HotelsPage() {
  const [hotels, setHotels] = useState([]);
  const { currentPath } = useContext(NavigationContext);

  useEffect(() => {
    async function fetchHotels() {
      const url = 'http://localhost:8080/hotels';
      const response = await fetch(url);
      const data = await response.json();
      setHotels(data);
    }
    fetchHotels();
  }, []);

  const renderedHotels = hotels.map(hotel => {
    return (
      <Link key={hotel.id} to={hotel.to}>
        <div className="hotel-show">
          <a href={hotel.to}>
            <h2>{hotel.name}</h2>
            <img src={hotel.picUrl} alt="" />
          </a>
        </div>
      </Link>
    );
  });

  return <div className="hotels-list">{renderedHotels}</div>;
}

export default HotelsPage;
