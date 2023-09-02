import React from "react";
import Crime from "./Crime";

const Crimes = (props) => {
  return (
    <>
      <h2 className="titles crimeTotals">More info</h2>
      <div className="crimes">
        {props.policeData &&
          props.policeData.map((crime, index) => {
            return <Crime crime={crime} key={index} />;
          })}
      </div>
    </>
  );
};

export default Crimes;
