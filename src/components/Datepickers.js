import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { DateTime } from 'luxon';
import 'react-datepicker/dist/react-datepicker.css';

function Datepickers({ onStartSelect, onEndSelect }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(startDate.getTime() + 86400000)
  );
  const [minEndDate, setMinEndDate] = useState(
    new Date(startDate.getTime() + 86400000)
  );

  const handleSelectStart = date => {
    const tomorrow = new Date(date.getTime() + 86400000);
    if (
      DateTime.fromJSDate(date).toISODate() >=
      DateTime.fromJSDate(endDate).toISODate()
    ) {
      setEndDate(tomorrow);
    }
    setMinEndDate(tomorrow);

    const start = DateTime.fromJSDate(date);

    const tom = DateTime.fromJSDate(tomorrow);
    let days = tom.diff(start, 'days');
    days = Math.round(days.values.days);
    onStartSelect(start, tom, days);
  };

  const handleSelectEnd = date => {
    const start = DateTime.fromJSDate(startDate);
    const end = DateTime.fromJSDate(date);
    let days = end.diff(start, 'days');
    days = Math.round(days.values.days);
    console.log(days);

    onEndSelect(end, days);
  };

  const datepicker = (
    <div className="datepickers">
      <div>
        <div>
          <label className="label">Check-in</label>
        </div>
        <div>
          <ReactDatePicker
            showIcon
            minDate={startDate}
            selectsStart
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            onChange={date => {
              setStartDate(date);
              handleSelectStart(date);
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <label className="label">Check-out</label>
        </div>
        <div>
          <ReactDatePicker
            showIcon
            minDate={minEndDate}
            selectsEnd
            selected={endDate}
            startDate={startDate}
            endDate={endDate}
            onChange={date => {
              setEndDate(date);
              handleSelectEnd(date);
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="subheader">Choose your room</div>
      {datepicker}
    </div>
  );
}
export default Datepickers;
