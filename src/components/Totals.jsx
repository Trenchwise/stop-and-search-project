import React from "react";
import Total from "./Total";

const Totals = (props) => {
  return (
    <>
      <p>{props.policeData && props.policeData.length}</p>
      {props.totalsAsArray.map((total) => {
        return (
          // totals component
          <Total total={total} />
        );
      })}
    </>
  );
};

export default Totals;
