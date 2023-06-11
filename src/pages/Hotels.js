import { Link } from 'react-router-dom';
import { useFetchHotelsQuery } from '../store';
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

function HotelsPage() {
  const [clicked4, setClicked4] = useState(false);
  const [clicked45, setClicked45] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [stars, setStars] = useState([]);
  const [filterFlag, setFilterFlag] = useState(false);

  useEffect(() => {
    if (!clicked4 && !clicked45 & !clicked5) {
      setFilterFlag(false);
    } else {
      setFilterFlag(true);
    }
  }, [clicked4, clicked45, clicked5]);

  useEffect(() => {
    if (clicked4) {
      setStars([...stars, '4']);
    } else {
      setStars(stars.filter(star => star !== '4'));
    }
  }, [clicked4]);

  useEffect(() => {
    if (clicked45) {
      setStars([...stars, '4.5']);
    } else {
      setStars(stars.filter(star => star !== '4.5'));
    }
  }, [clicked45]);

  useEffect(() => {
    if (clicked5) {
      setStars([...stars, '5']);
    } else {
      setStars(stars.filter(star => star !== '5'));
    }
  }, [clicked5]);

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
        <div>Star rating</div>
        <div>
          <div>
            <button
              onClick={() => {
                setClicked4(!clicked4);
              }}
              className={clicked4 ? 'btn-clicked' : 'btn-notclicked'}
            >
              4 <FaStar />
            </button>
            <button
              onClick={() => {
                setClicked45(!clicked45);
              }}
              className={clicked45 ? 'btn-clicked' : 'btn-notclicked'}
            >
              4.5 <FaStar />
            </button>
            <button
              onClick={() => {
                setClicked5(!clicked5);
              }}
              className={clicked5 ? 'btn-clicked' : 'btn-notclicked'}
            >
              5 <FaStar />
            </button>
          </div>
        </div>
      </div>

      <div className="hotels-list">{renderedHotels}</div>
    </div>
  );
}

export default HotelsPage;
