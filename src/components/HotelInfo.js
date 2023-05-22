import { RiWifiFill } from 'react-icons/ri';
import { TbAirConditioning } from 'react-icons/tb';
import { MdRestaurantMenu } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';
import { MdLocalLaundryService } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';

function HotelInfo({ name, stars }) {
  const renderedStars = [];
  console.log(Number(stars * 2));
  for (let i = 2; i <= Number(stars * 2); i = i + 2) {
    renderedStars.push(<FaStar />);
    if (Number(stars * 2) - i === 1) {
      renderedStars.push(<FaStarHalf />);
    }
  }

  const renderedHeader = (
    <div className="heading">
      <div className="header">{name}</div>
      {renderedStars}
      <div className="subheader">Popular Amenities</div>
      <div className="icons-list">
        <div>
          <div className="icons">
            <div>
              <RiWifiFill />
            </div>
            <div className="icon">Free WiFi</div>
          </div>
          <div className="icons">
            <div>
              <TbAirConditioning />
            </div>
            <div className="icon">Air Conditioning</div>
          </div>
          <div className="icons">
            <div>
              <MdRestaurantMenu />
            </div>
            <div className="icon">Restaurant</div>
          </div>
        </div>
        <div>
          <div className="icons">
            <div>
              <CgGym />
            </div>
            <div className="icon">Gym</div>
          </div>
          <div className="icons">
            <div>
              <MdLocalLaundryService />
            </div>
            <div className="icon">Laundry</div>
          </div>
          <div className="icons">
            <div>
              <AiFillCar />
            </div>
            <div className="icon">Parking</div>
          </div>
        </div>
      </div>
    </div>
  );
  return <div>{renderedHeader}</div>;
}

export default HotelInfo;
