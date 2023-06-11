import { Link } from 'react-router-dom';
import { useFetchHotelsQuery } from '../store';
import { useState, useEffect } from 'react';
import StarFilter from '../components/StarFilter';

function HotelsPage() {
  const { data, error, isLoading } = useFetchHotelsQuery();

  let renderedHotels;

  if (isLoading) {
    return <div>Loading data</div>;
  } else if (error) {
    return <div>Error loading data.</div>;
  } else {
    let hotels;
    if (filterFlag) {
      hotels = data.filter(hotel => stars.includes(hotel.stars));
    } else {
      hotels = data;
    }
    renderedHotels = hotels.map(hotel => {
      return (
        <div key={hotel.id}>
          <Link to={`/hotels/${hotel.to}`} className="link">
            <div className="hotel-show">
              <h2 style={{ marginBottom: '3px' }}>{hotel.name}</h2>
              <h5 style={{ marginTop: '1px', color: 'gray' }}>New York</h5>
              <img src={hotel.picUrl} alt="" />
            </div>
          </Link>
        </div>
      );
    });
  }
  return (
    <div className="hotels">
      <div className="hotels-filter">
        <div className="hotels-filter-heading">Filter by</div>
        <StarFilter />
      </div>
      <div className="hotels-list">{renderedHotels}</div>
    </div>
  );
}

export default HotelsPage;
