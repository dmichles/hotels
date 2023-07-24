import { useState, useRef, useEffect } from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import { useFetchLocationQuery } from '../../store';
import { IconContext } from 'react-icons';
import { MdLocationOn } from 'react-icons/md';
import { locationSliceActions } from '../../store/slices/location-slice';
import { useDispatch, useSelector } from 'react-redux';
import './locationbox.css';
import 'react-popper-tooltip/dist/styles.css';

function LocationBox() {
  const [open, setOpen] = useState(false);
  const [queryValue, setQueryValue] = useState('');
  const location = useSelector(state => state.location.value);
  const dispatch = useDispatch();

  const { getTooltipProps, setTooltipRef, setTriggerRef } = usePopperTooltip({
    interactive: 'true',
    offset: [1, -40],
  });

  const ref1 = useRef();
  const ref2 = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        ref1.current &&
        !ref1.current.contains(e.target) &&
        ref2.current &&
        !ref2.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const { data, error, isLoading } = useFetchLocationQuery(queryValue);
  let locations;
  if (isLoading) {
    console.log('Loading data');
  } else if (error) {
    console.log('Error loading data');
  } else if (!isLoading) {
    const result = data;

    // const data = await fetch(`http://localhost:8080/getLocation?loc=${value}`);
    // const result = await data.json();
    locations = result.map((item, index) => {
      return (
        <div
          key={index}
          className='item'
          onClick={() => doClick(item.location)}
        >
          <IconContext.Provider value={{ className: 'item-icon' }}>
            <MdLocationOn />
          </IconContext.Provider>
          {item.location}
        </div>
      );
    });
  }

  const doClick = value => {
    dispatch(locationSliceActions.setLocation(value));
    setQueryValue(value);
    doChange(value);
    setOpen(false);
  };
  const doChange = async value => {
    value = value.replace(/[^a-zA-Z -]+/, '');
    setQueryValue(value);
  };
  return (
    <div>
      <div ref={ref2} className='wrapper'>
        <MdLocationOn className='icon-box' />
        <div>
          <label>Where to?</label>
        </div>
        <input
          type='text'
          placeholder='Going to'
          className='box'
          ref={setTriggerRef}
          onClick={() => {
            setOpen(!open);
            setQueryValue(location);
          }}
          value={location}
          readOnly={true}
        ></input>
      </div>
      {open && (
        <div ref={ref1}>
          <div
            ref={setTooltipRef}
            {...getTooltipProps({ className: 'tooltip-container' })}
          >
            <input
              placeholder='Going to'
              value={queryValue}
              className='input'
              type='text'
              onChange={e => doChange(e.target.value)}
            />
            <div>{locations}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LocationBox;
