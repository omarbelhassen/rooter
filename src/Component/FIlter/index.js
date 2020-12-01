import React from "react";
import Rate from "../Rate/Rate";
function Filter({ setTextSerach, setSearchRate, Rating }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", width: "30%", paddingLeft:"40px" }}
    >
      <input style={{paddingRight:"40px"}}
        placeholder="Search movie"
        onChange={(e) => setTextSerach(e.target.value)}
      />
      <Rate setSearchRate={setSearchRate} Rating={Rating} />
    </div>
  );
}

export default Filter;
