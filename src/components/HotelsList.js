import { Link } from 'react-router-dom';

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
          target="_blank"
          className="link"
        >
          <div className="hotel-show">
            <div>
              <img className="hotel-show-img" src={hotel.picUrl} alt="" />
            </div>
            <div className="hotel-show-data">
              <div>
                <h2 style={{ marginBottom: '3px' }}>{hotel.name}</h2>
                <h5 style={{ marginTop: '1px', color: 'gray' }}>New York</h5>
              </div>
              <div className="hotel-show-footer">
                <div className="hotel-show-footer-rating">
                  <div className="hotel-show-footer-rating-number">
                    {hotel.rating}
                  </div>
                  <div>{map1.get(Math.floor(Number(hotel.rating)))}</div>
                </div>
                <div className="hotel-show-footer-price">
                  <div className="hotel-show-footer-price-room">
                    ${hotel.price}
                  </div>
                  <div className="hotel-show-footer-price-total">
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
  return <div className="hotels-list">{renderedHotels}</div>;
}

export default HotelsList;
