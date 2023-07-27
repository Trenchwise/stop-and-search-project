import React from "react";
import Stop from "./Stop";

// Mapping over all the stop and search entries
const Stops = (props) => {
  return (
    <>
      {props.stopsData &&
        props.stopsData.map((stop, index) => {
          // can live in a component crime
          return <Stop stop={stop} key={index} />;
        })}
    </>
  );
};

export default Stops;
