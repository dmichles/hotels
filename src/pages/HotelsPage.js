import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HotelsPage() {
  const [hotels, setHotels] = useState([]);

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
      <Link key={hotel.id} to={`/hotels/${hotel.to}`}>
        <div className="hotel-show">
          <h2>{hotel.name}</h2>
          <img src={hotel.picUrl} alt="" />
        </div>
      </Link>
    );
  });

  return <div className="hotels-list">{renderedHotels}</div>;
}

export default HotelsPage;
