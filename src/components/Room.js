import { MdSquareFoot } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';

function Room({ room, days, onReserve }) {
  const handleReserve = () => {
    onReserve(room.id);
  };

  return (
    <div key={room.id} className="room-show">
      <img src={room.picUrl} alt="" />
      <div className="room-type">{room.type}</div>
      <div className="icons">
        <div>
          <MdSquareFoot />
        </div>
        <div className="icon">{room.area} sq ft</div>
      </div>
      <div className="icons">
        <div>
          <BsFillPeopleFill />
        </div>
        <div className="icon">Sleeps {room.people}</div>
      </div>
      <div className="icons">
        <div>
          <FaBed />
        </div>
        <div className="icon">{room.bed} bed</div>
      </div>

      <div className="footer">
        <div className="price-info">
          <div className="price">${room.price}</div>
          <div className="total">${room.price * days} total</div>
        </div>
        <div className="button-container">
          <button className="btn" onClick={handleReserve}>
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
export default Room;
