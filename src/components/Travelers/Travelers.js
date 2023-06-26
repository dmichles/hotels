import { useState, useRef, useEffect } from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { travelersActions } from '../../store/slices/travelers-slice';
import './travelers.css';

function Travelers() {
  const [open, setOpen] = useState(false);
  const travelers = useSelector(state => state.travelers.value);
  const [counter, setCounter] = useState(travelers);

  useEffect(() => {
    setCounter(travelers);
  }, [travelers]);

  const dispatch = useDispatch();

  const { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef } =
    usePopperTooltip({
      interactive: 'true',
      offset: [0, 9],
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
      <div ref={setTriggerRef}>
        <div>
          <label className="travelers-label">Travelers</label>
        </div>
        <div
          ref={ref1}
          className="travelers-box"
          onClick={() => setOpen(!open)}
        >
          <div>
            <IconContext.Provider value={{ className: 'travelers-box-icon' }}>
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
            <div className="tooltip-container-title">Room 1</div>
            <div className="tooltip-container-content-wrapper">
              <div className="tooltip-container-content">
                <div className="tooltip-container-content-title">Adults</div>
                <div className="tooltip-container-buttons-container-wrapper">
                  <div>
                    <button
                      className="tooltip-container-increment-button"
                      onClick={() =>
                        handleClick(counter === 1 ? 1 : counter - 1)
                      }
                    >
                      -
                    </button>
                  </div>
                  <div className="tooltip-container-counter">{counter}</div>
                  <div>
                    <button
                      className="tooltip-container-decrement-button"
                      onClick={() => handleClick(counter + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="tooltip-container-done-button-wrapper">
                <div className="tooltip-container-done-button-container">
                  <button
                    className="tooltip-container-done-button"
                    onClick={handleDone}
                  >
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
