import React from "react";
import Total from "./Total";

const Totals = (props) => {
  return (
    <div className="crimeTotals">
      <p>{props.policeData && props.policeData.length}</p>
      {props.totalsAsArray.map((total) => {
        return (
          // totals component
          <Total total={total} />
        );
      })}
    </div>
  );
};

export default Totals;
