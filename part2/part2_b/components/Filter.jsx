import React from "react";

const Filter = ({ filterValue, handlenewfilter }) => {
  return (
    <div>
      filter shown with
      <input value={filterValue} onChange={handlenewfilter} />
    </div>
  );
};

export default Filter;
