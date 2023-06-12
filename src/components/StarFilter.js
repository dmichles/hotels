import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { starsFilterFlagActions } from '../store/slices/starsFilterFlag-slice';
import { starsActions } from '../store/slices/stars-slice';

function StarFilter() {
  const [clicked4, setClicked4] = useState(false);
  const [clicked45, setClicked45] = useState(false);
  const [clicked5, setClicked5] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!clicked4 && !clicked45 & !clicked5) {
      dispatch(starsFilterFlagActions.setStarFilterFlag(false));
    } else {
      dispatch(starsFilterFlagActions.setStarFilterFlag(true));
    }
  }, [clicked4, clicked45, clicked5]);

  useEffect(() => {
    if (clicked4) {
      dispatch(starsActions.addStar('4'));
    } else {
      dispatch(starsActions.removeStar('4'));
    }
  }, [clicked4]);

  useEffect(() => {
    if (clicked45) {
      dispatch(starsActions.addStar('4.5'));
    } else {
      dispatch(starsActions.removeStar('4.5'));
    }
  }, [clicked45]);

  useEffect(() => {
    if (clicked5) {
      dispatch(starsActions.addStar('5'));
    } else {
      dispatch(starsActions.removeStar('5'));
    }
  }, [clicked5]);

  return (
    <div>
      <div>Star rating</div>
      <button
        onClick={() => {
          setClicked4(!clicked4);
        }}
        className={clicked4 ? 'btn-clicked' : 'btn-notclicked'}
      >
        4 <FaStar />
      </button>
      <button
        onClick={() => {
          setClicked45(!clicked45);
        }}
        className={clicked45 ? 'btn-clicked' : 'btn-notclicked'}
      >
        4.5 <FaStar />
      </button>
      <button
        onClick={() => {
          setClicked5(!clicked5);
        }}
        className={clicked5 ? 'btn-clicked' : 'btn-notclicked'}
      >
        5 <FaStar />
      </button>
    </div>
  );
}

export default StarFilter;
