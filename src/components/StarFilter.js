import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

function StarFilter() {
  const [clicked4, setClicked4] = useState(false);
  const [clicked45, setClicked45] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [stars, setStars] = useState([]);
  const [filterFlag, setFilterFlag] = useState(false);

  useEffect(() => {
    if (!clicked4 && !clicked45 & !clicked5) {
      setFilterFlag(false);
    } else {
      setFilterFlag(true);
    }
  }, [clicked4, clicked45, clicked5]);

  useEffect(() => {
    if (clicked4) {
      setStars([...stars, '4']);
    } else {
      setStars(stars.filter(star => star !== '4'));
    }
  }, [clicked4]);

  useEffect(() => {
    if (clicked45) {
      setStars([...stars, '4.5']);
    } else {
      setStars(stars.filter(star => star !== '4.5'));
    }
  }, [clicked45]);

  useEffect(() => {
    if (clicked5) {
      setStars([...stars, '5']);
    } else {
      setStars(stars.filter(star => star !== '5'));
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
