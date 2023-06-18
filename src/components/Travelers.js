import { useState, useRef, useEffect } from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { travelersActions } from '../store/slices/travelers-slice';

import ReactDOM from 'react-dom';

function Travelers() {
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(2);
  const dispatch = useDispatch();

  const travelers = useSelector(state => state.travelers.value);
  const { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef } =
    usePopperTooltip({
      interactive: 'true',
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

  const handleClick = value => {
    setCounter(value);
  };

  const handleDone = () => {
    dispatch(travelersActions.setTravelers(counter));
    setOpen(false);
  };

  return (
    <div>
      <div ref={setTriggerRef} style={{ marginTop: '5px' }}>
        <div>
          <label className="label">Travelers</label>
        </div>
        <div
          ref={ref1}
          className="travelers-box"
          onClick={() => setOpen(!open)}
        >
          <div>
            <IconContext.Provider
              value={{ style: { verticalAlign: 'middle' } }}
            >
              <BsFillPeopleFill />
            </IconContext.Provider>
          </div>
          <div>
            {travelers} {travelers > 1 ? 'travelers' : 'traveler'}
          </div>
        </div>
      </div>

      {open && (
        <div ref={ref2}>
          <div
            ref={setTooltipRef}
            className="tooltip-container"
            {...getTooltipProps({ className: 'tooltip-container' })}
          >
            <div {...getArrowProps({ className: 'tooltip-arrow' })} />
            <div style={{ marginTop: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '15px',
                }}
              >
                <div style={{ marginTop: '15px', fontSize: '13px' }}>
                  Adults
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}
                >
                  <div>
                    <button
                      style={{
                        borderRadius: '50px',
                        height: '25px',
                        width: '25px',
                        marginTop: '15px',
                      }}
                      onClick={() =>
                        handleClick(counter === 1 ? 1 : counter - 1)
                      }
                    >
                      -
                    </button>
                  </div>
                  <div
                    style={{
                      marginTop: '15px',
                      fontSize: '13px',
                      marginLeft: '10px',
                    }}
                  >
                    {counter}
                  </div>
                  <div>
                    <button
                      style={{
                        borderRadius: '50px',
                        height: '25px',
                        width: '25px',
                        marginTop: '15px',
                        marginLeft: '10px',
                      }}
                      onClick={() => handleClick(counter + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ marginTop: '20px' }}>
                  <button className="btn-done" onClick={handleDone}>
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Travelers;
