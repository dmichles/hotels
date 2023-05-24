import { useEffect, useState, useRef } from 'react';
import HotelInfo from './HotelInfo';
import Datepickers from './Datepickers';
import Room from './Room';
import { DateTime } from 'luxon';

function Hotel({ name }) {
  const [rooms, setRooms] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [days, setDays] = useState(1);
  const startDate = useRef(DateTime.now().toISODate());
  const endDate = useRef(DateTime.now().plus({ days: 1 }).toISODate());

  useEffect(() => {
    async function fetchHotel() {
      const url = `http://localhost:8080/getHotel?name=${name}`;
      const response = await fetch(url);
      const data = await response.json();
      setHotel(data);
    }
    fetchHotel();
  }, []);

  useEffect(() => {
    async function fetchRooms() {
      const url = `http://localhost:8080/getRooms?name=${name}`;
      const response = await fetch(url);
      const data = await response.json();

      setRooms(data);
    }
    fetchRooms();
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

  const onReserve = async id => {
    console.log('test');
    console.log(startDate.current);
    console.log(endDate.current);
    console.log(id);
    const url = 'http://localhost:8080/addReservation';
    const response = await fetch(url, {
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
  };

  const renderedRooms = rooms.map(room => {
    return <Room key={room.id} room={room} days={days} onReserve={onReserve} />;
  });

  return (
    <div className="hotel">
      <div>
        <HotelInfo name={name} stars={hotel.stars} />
      </div>
      <div>
        <Datepickers onStartSelect={onStartSelect} onEndSelect={onEndSelect} />
      </div>
      <div className="room-list">{renderedRooms}</div>
    </div>
  );
}

export default Hotel;
