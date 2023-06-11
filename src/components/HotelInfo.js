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

function HotelInfo({ name, stars, amenities }) {
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

  const renderedStars = [];
  for (let i = 2; i <= Number(stars * 2); i = i + 2) {
    renderedStars.push(<FaStar key={i} />);
    if (Number(stars * 2) - i === 1) {
      renderedStars.push(<FaStarHalf key={i + 1} />);
    }
  }

  const renderedHeader = (
    <div className="heading">
      <div className="header">{name} New York</div>
      {renderedStars}
      <div className="subheader">Popular amenities</div>
      <div className="icons-list">
        <div>
          <div className="icons">
            <div>{map1.get(amenities.am1)}</div>
            <div className="icon">{amenities.am1}</div>
          </div>
          <div className="icons">
            <div>{map1.get(amenities.am2)}</div>
            <div className="icon">{amenities.am2}</div>
          </div>
          <div className="icons">
            <div>{map1.get(amenities.am3)}</div>
            <div className="icon">{amenities.am3}</div>
          </div>
        </div>
        <div>
          <div className="icons">
            <div>{map1.get(amenities.am4)}</div>
            <div className="icon">{amenities.am4}</div>
          </div>
          <div className="icons">
            <div>{map1.get(amenities.am5)}</div>
            <div className="icon">{amenities.am5}</div>
          </div>
          <div className="icons">
            <div>{map1.get(amenities.am6)}</div>
            <div className="icon">{amenities.am6}</div>
          </div>
        </div>
      </div>
    </div>
  );
  return <div>{renderedHeader}</div>;
}

export default HotelInfo;
