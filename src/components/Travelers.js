import { useState } from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import TetherComponent from 'react-tether';

import { useDispatch, useSelector } from 'react-redux';
import { travelersActions } from '../store/slices/travelers-slice';

function Travelers() {
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(2);
  const dispatch = useDispatch();

  const travelers = useSelector(state => state.travelers.value);

  const handleClick = value => {
    setCounter(value);
  };

  const handleDone = () => {
    dispatch(travelersActions.setTravelers(counter));
    setOpen(false);
  };

  return (
    <TetherComponent
      attachment="bottom right"
      targetAttachment="top right"
      constraints={[{ to: 'scrollParent', attachment: 'together' }]}
      renderTarget={ref => (
        <div ref={ref} style={{ marginTop: '5px' }}>
          <div>
            <label className="label">Travelers</label>
          </div>
          <div className="travelers-box" onClick={() => setOpen(!open)}>
            <div>
              <BsFillPeopleFill />
            </div>
            <div>
              {' '}
              {travelers} {travelers > 1 ? 'travelers' : 'traveler'}
            </div>
          </div>
        </div>
      )}
      renderElement={ref =>
        open && (
          <div ref={ref} className="popup-content">
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
                <div></div>
                <div style={{ marginTop: '20px' }}>
                  <button className="btn-done" onClick={handleDone}>
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    />
  );
}

export default Travelers;
