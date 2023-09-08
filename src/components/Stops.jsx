import React from "react";
import Stop from "./Stop";

// Mapping over all the stop and search entries
const Stops = (props) => {
  return (
    <div className="stops">
      <h2 className="titles crimeTotals">
        More information on stop and searches made in your area
      </h2>
      {props.stopsData &&
        props.stopsData.map((stop, index) => {
          // can live in a component crime
          return <Stop stop={stop} key={index} />;
        })}
    </div>
  );
};

export default Stops;
