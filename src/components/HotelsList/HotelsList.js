import { Link } from 'react-router-dom';
import './hotelslist.css';

function HotelsList({
  hotels,
  days,
  chkin,
  chkout,
  travelers,
  minPrice,
  maxPrice,
}) {
  const map1 = new Map();
  map1.set(8, 'Very Good');
  map1.set(9, 'Excellent');
  const renderedHotels = hotels.map(hotel => {
    return (
      <div key={hotel.id}>
        <Link
          to={`/hotels/${hotel.to}?chkin=${chkin}&chkout=${chkout}&trvlrs=${travelers}&minPrice=${minPrice}&maxPrice=${maxPrice}`}
          target='_blank'
          className='link'
        >
          <div className='hotel-show'>
            <div>
              <img className='hotel-show-img' src={hotel.picUrl} alt='' />
            </div>
            <div className='hotel-show-data'>
              <div>
                <h2 className='hotel-show-data-name'>{hotel.name}</h2>
                <h5 className='hotel-show-data-location'>{hotel.location}</h5>
              </div>
              <div className='hotel-show-data-footer'>
                <div className='hotel-show-data-footer-rating-container'>
                  <div className='hotel-show-data-footer-rating'>
                    {hotel.rating}
                  </div>
                  <div>{map1.get(Math.floor(Number(hotel.rating)))}</div>
                </div>
                <div className='hotel-show-data-footer-price-container'>
                  <div className='hotel-show-data-footer-price'>
                    ${hotel.price}
                  </div>
                  <div className='hotel-show-data-footer-price-total'>
                    ${hotel.price * days} total
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className='hotels-list'>{renderedHotels}</div>;
}

export default HotelsList;
