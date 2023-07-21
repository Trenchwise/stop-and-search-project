import React from "react";

const Total = (props) => {
  return (
    <p className="crimeTotal">
      {props.total[0]}: {props.total[1]}
    </p>
  );
};

export default Total;
