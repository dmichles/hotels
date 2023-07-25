import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { DateTime } from 'luxon';
import 'react-datepicker/dist/react-datepicker.css';
import './datepickers.css';
import { useSelector, useDispatch } from 'react-redux';

import { startDateActions } from '../../store/slices/startDate-slice';
import { endDateActions } from '../../store/slices/endDate-slice';

function Datepickers() {
  const dispatch = useDispatch();

  const startDate = DateTime.fromISO(
    useSelector(state => state.startDate.date)
  ).toJSDate();

  const endDate = DateTime.fromISO(
    useSelector(state => state.endDate.date)
  ).toJSDate();

  const [minEndDate, setMinEndDate] = useState(
    new Date(startDate.getTime() + 86400000)
  );
  const today = new Date();

  const handleSelectStart = date => {
    const tomorrow = new Date(date.getTime() + 86400000);
    if (
      DateTime.fromJSDate(date).toISODate() >=
      DateTime.fromJSDate(endDate).toISODate()
    ) {
      dispatch(
        endDateActions.setEndDate(DateTime.fromJSDate(tomorrow).toISO())
      );
    }
    setMinEndDate(tomorrow);
  };

  const datepicker = (
    <div className='datepickers'>
      <div>
        <div>
          <label className='datepickers-label'>Check-in</label>
        </div>
        <div>
          <ReactDatePicker
            className='datepickers-mydatepicker'
            showIcon
            monthsShown={2}
            minDate={today}
            selectsStart
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            onChange={date => {
              dispatch(
                startDateActions.setStartDate(DateTime.fromJSDate(date).toISO())
              );
              handleSelectStart(date);
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <label className='datepickers-label'>Check-out</label>
        </div>
        <div>
          <ReactDatePicker
            className='datepickers-mydatepicker'
            showIcon
            minDate={minEndDate}
            selectsEnd
            monthsShown={2}
            selected={endDate}
            startDate={startDate}
            endDate={endDate}
            onChange={date => {
              dispatch(
                endDateActions.setEndDate(DateTime.fromJSDate(date).toISO())
              );
            }}
          />
        </div>
      </div>
    </div>
  );

  return <div>{datepicker}</div>;
}
export default Datepickers;
