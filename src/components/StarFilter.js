import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { starsActions } from '../store/slices/stars-slice';

function StarFilter() {
  const [clicked4, setClicked4] = useState(false);
  const [clicked45, setClicked45] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const stars = useSelector(state => state.stars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(starsActions.setInitState());
  }, []);

  const handleClick4 = flag => {
    setClicked4(flag);
    if (flag) {
      dispatch(starsActions.addStar('4'));
    } else {
      dispatch(starsActions.removeStar('4'));
    }
  };

  const handleClick45 = flag => {
    setClicked45(flag);
    if (flag) {
      dispatch(starsActions.addStar('4.5'));
    } else {
      dispatch(starsActions.removeStar('4.5'));
    }
  };

  const handleClick5 = flag => {
    setClicked5(flag);
    if (flag) {
      dispatch(starsActions.addStar('5'));
    } else {
      dispatch(starsActions.removeStar('5'));
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '15px', fontWeight: 'bold' }}>
        Star rating
      </div>
      <button
        onClick={() => {
          handleClick4(!clicked4);
        }}
        className={clicked4 ? 'btn-clicked' : 'btn-notclicked'}
      >
        4 <FaStar />
      </button>
      <button
        onClick={() => {
          handleClick45(!clicked45);
        }}
        className={clicked45 ? 'btn-clicked' : 'btn-notclicked'}
      >
        4.5 <FaStar />
      </button>
      <button
        onClick={() => {
          handleClick5(!clicked5);
        }}
        className={clicked5 ? 'btn-clicked' : 'btn-notclicked'}
      >
        5 <FaStar />
      </button>
    </div>
  );
}

export default StarFilter;
