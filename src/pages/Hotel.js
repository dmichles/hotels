import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, createSearchParams } from 'react-router-dom';
import HotelInfo from '../components/HotelInfo';
import Datepickers from '../components/Datepickers';
import Room from '../components/Room';
import { DateTime } from 'luxon';

function HotelPage() {
  const params = useParams();
  const [rooms, setRooms] = useState([]);
  const [hotel, setHotel] = useState({});
  const [amenities, setAmenities] = useState({});
  const [days, setDays] = useState(1);
  const startDate = useRef(DateTime.now().toISODate());
  const endDate = useRef(DateTime.now().plus({ days: 1 }).toISODate());

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchHotel() {
      const url = `http://localhost:8080/getHotel?to=${params.to}`;
      const response = await fetch(url);
      const data = await response.json();
      setHotel(data);
    }
    fetchHotel();
  }, []);

  useEffect(() => {
    async function fetchRooms() {
      const url = `http://localhost:8080/getRooms?to=${params.to}`;
      const response = await fetch(url);
      const data = await response.json();

      setRooms(data);
    }
    fetchRooms();
  }, []);

  useEffect(() => {
    async function fetchAmenities() {
      const url = `http://localhost:8080/getAmenities?to=${params.to}`;
      const response = await fetch(url);
      const data = await response.json();
      setAmenities(data);
    }
    fetchAmenities();
  }, []);

  const onStartSelect = (start, end, days) => {
    startDate.current = start.toISODate();
    endDate.current = end.toISODate();
    setDays(days);
  };

  const onEndSelect = (end, days) => {
    endDate.current = end.toISODate();
    setDays(days);
  };

  const onReserve = async (id, type) => {
    console.log('test');
    console.log(startDate.current);
    console.log(endDate.current);
    console.log(id);
    const url = 'http://localhost:8080/addReservation';
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate: startDate.current,
        endDate: endDate.current,
        roomId: id,
      }),
    });

    navigate(
      '/reservation',
      // search: createSearchParams({
      //   start: startDate.current,
      //   end: endDate.current,
      //   type: type,
      // }).toString(),
      { state: { start: startDate.current, end: endDate.current, type: type } }
    );
  };

  const renderedRooms = rooms.map(room => {
    return <Room key={room.id} room={room} days={days} onReserve={onReserve} />;
  });

  return (
    <div className="hotel">
      <div>
        <HotelInfo
          name={hotel.name}
          stars={hotel.stars}
          amenities={amenities}
        />
      </div>
      <div>
        <Datepickers onStartSelect={onStartSelect} onEndSelect={onEndSelect} />
      </div>
      <div className="room-list">{renderedRooms}</div>
    </div>
  );
}

export default HotelPage;
