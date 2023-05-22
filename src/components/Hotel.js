import { useEffect, useState } from 'react';
import Header from './Header';
import Datepickers from './Datepickers';
import Rooms from './Rooms';
import { DateTime } from 'luxon';

function Hotel({ name }) {
  const [rooms, setRooms] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [days, setDays] = useState(1);
  const [startDate, setStartDate] = useState(DateTime.now());
  const [endDate, setEndDate] = useState(DateTime.now().plus({ days: 1 }));

  useEffect(() => {
    async function fetchHotels() {
      const url = `http://localhost:8080/getHotel?name=${name}`;
      const response = await fetch(url);
      const data = await response.json();
      setHotel(data);
    }
    fetchHotels();
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
    setStartDate(start);
    setEndDate(end);
    setDays(days);
  };

  const onEndSelect = (end, days) => {
    setEndDate(end);
    setDays(days);
  };

  return (
    <div className="hotel">
      <div>
        <Header name={name} stars={hotel.stars} />
      </div>
      <div>
        <Datepickers onStartSelect={onStartSelect} onEndSelect={onEndSelect} />
      </div>
      <Rooms rooms={rooms} days={days} />
    </div>
  );
}

export default Hotel;
