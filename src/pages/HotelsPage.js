import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetchHotelsQuery } from '../store';

function HotelsPage() {
  const { data, error, isLoading } = useFetchHotelsQuery();

  let renderedHotels;

  if (isLoading) {
    return <div>Loading data</div>;
  } else if (error) {
    return <div>Error loading data.</div>;
  } else {
    renderedHotels = data.map(hotel => {
      return (
        <div>
          <Link key={hotel.id} to={`/hotels/${hotel.to}`} className="link">
            <div className="hotel-show">
              <h2>{hotel.name}</h2>
              <img src={hotel.picUrl} alt="" />
            </div>
          </Link>
        </div>
      );
    });
  }
  return <div className="hotels-list">{renderedHotels}</div>;
}

export default HotelsPage;
