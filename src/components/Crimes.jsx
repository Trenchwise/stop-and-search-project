import React from "react";
import Crime from "./Crime";

const Crimes = (props) => {
  return (
    <>
      <h2 className="titles crimeTotals ">
        <h4>More information on arrests made in your area </h4>
        <p>
          Blank spaces indicate police did not or could no record that
          information
        </p>
      </h2>
      <div className="crimes ">
        {props.policeData &&
          props.policeData.map((crime, index) => {
            return <Crime crime={crime} key={index} />;
          })}
      </div>
    </>
  );
};

export default Crimes;
