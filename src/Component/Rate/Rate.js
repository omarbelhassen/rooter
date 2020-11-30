import React from "react";
import "./Rate.css";
function Rate({ Rating, setSearchRate }) {
  console.log(Rating)
  const stars = (x) => {
    let starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starArray.push(
          <span className="stars" key={i} onClick={() => setSearchRate(i)}>
            ★
          </span>
        );
      } else {
        starArray.push(
          <span className="stars" key={i} onClick={() => setSearchRate(i)}>
            ☆
          </span>
        );
      }
    }
    return starArray;
  };

  return <div style={{paddingLeft:"40px"}}>{stars(Rating)}</div>;
}

export default Rate;
