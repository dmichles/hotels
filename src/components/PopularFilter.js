function PopularFilter() {
  return (
    <div>
      <div style={{ marginTop: '20px' }}>Popular filters</div>
      <div>
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">Pool</label>
      </div>
      <div>
        <input type="checkbox" id="checkbox2" />
        <label htmlFor="checkbox2">Pet friendly</label>
      </div>
      <div>
        <input type="checkbox" id="checkbox3" />
        <label htmlFor="checkbox3">Parking</label>
      </div>
      <div>
        <input type="checkbox" id="checkbox4" />
        <label htmlFor="checkbox4">Spa</label>
      </div>
    </div>
  );
}

export default PopularFilter;
