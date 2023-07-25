import React from "react";
import Total from "./Total";

const Totals = (props) => {
  return (
    <div className="crimeTotals">
      <h2 id="totalNumberCrimes">
        {props.policeData && props.policeData.length}
      </h2>
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
