import React from "react";
import Crime from "./Crime";

const Crimes = (props) => {
  return (
    <div className="crimes">
      {props.policeData &&
        props.policeData.map((crime) => {
          // can live in a component crime
          return <Crime crime={crime} />;
        })}
    </div>
  );
};

export default Crimes;
