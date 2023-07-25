import React from "react";
import Stop from "./Stop";

// Mapping over all the stop and search entries
const Stops = (props) => {
  return (
    <>
      {props.stopData &&
        props.stopData.map((stop) => {
          // can live in a component crime
          return <Stop stop={stop} />;
        })}
    </>
  );
};

export default Stops;
