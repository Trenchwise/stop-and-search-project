import React from "react";
import Crime from "./Crime";

const Crimes = (props) => {
  return (
    <div className="crimes">
      {props.policeData &&
        props.policeData.map((crime) => {
          return <Crime crime={crime} />;
        })}
    </div>
  );
};

export default Crimes;
