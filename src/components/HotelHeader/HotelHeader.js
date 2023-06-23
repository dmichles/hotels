import { RiWifiFill } from 'react-icons/ri';
import { TbAirConditioning } from 'react-icons/tb';
import { MdRestaurantMenu } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';
import { MdLocalLaundryService } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { MdFreeBreakfast } from 'react-icons/md';
import { MdSpa } from 'react-icons/md';
import { MdPool } from 'react-icons/md';
import { MdPets } from 'react-icons/md';
import { FaCocktail } from 'react-icons/fa';
import './hotelheader.css';

function HotelHeader({ name, stars, amenities, rating }) {
  const map1 = new Map();
  map1.set('Gym', <CgGym />);
  map1.set('Free WiFi', <RiWifiFill />);
  map1.set('Restaurant', <MdRestaurantMenu />);
  map1.set('Air conditioning', <TbAirConditioning />);
  map1.set('Laundry', <MdLocalLaundryService />);
  map1.set('Parking available', <AiFillCar />);
  map1.set('Breakfast available', <MdFreeBreakfast />);
  map1.set('Spa', <MdSpa />);
  map1.set('Pool', <MdPool />);
  map1.set('Pet friendly', <MdPets />);
  map1.set('Bar', <FaCocktail />);

  const map2 = new Map();
  map2.set(8, 'Very Good');
  map2.set(9, 'Excellent');
  map2.set(10, 'Wonderful');

  const renderedStars = [];
  for (let i = 2; i <= Number(stars * 2); i = i + 2) {
    renderedStars.push(<FaStar key={i} />);
    if (Number(stars * 2) - i === 1) {
      renderedStars.push(<FaStarHalf key={i + 1} />);
    }
  }

  const renderedHeader = (
    <div className="header-container">
      <div className="header-container-title">{name} New York</div>
      {renderedStars}
      <div className="header-container-rating">
        {rating}/10 {map2.get(Math.round(Number(rating)))}
      </div>
      <div className="header-container-amenities-title">Popular amenities</div>
      <div className="icons-list">
        <div>
          <div className="icons">
            <div>{map1.get(amenities[0])}</div>
            <div className="icon">{amenities[0]}</div>
          </div>
          <div className="icons">
            <div>{map1.get(amenities[1])}</div>
            <div className="icon">{amenities[1]}</div>
          </div>
          <div className="icons">
            <div>{map1.get(amenities[2])}</div>
            <div className="icon">{amenities[2]}</div>
          </div>
        </div>
        <div>
          <div className="icons">
            <div>{map1.get(amenities[3])}</div>
            <div className="icon">{amenities[3]}</div>
          </div>
          <div className="icons">
            <div>{map1.get(amenities[4])}</div>
            <div className="icon">{amenities[4]}</div>
          </div>
          <div className="icons">
            <div>{map1.get(amenities[5])}</div>
            <div className="icon">{amenities[5]}</div>
          </div>
        </div>
      </div>
    </div>
  );
  return <div>{renderedHeader}</div>;
}

export default HotelHeader;
