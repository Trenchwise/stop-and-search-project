import React from "react";
import Crime from "./Crime";

const Crimes = (props) => {
  return (
    <div className="crimes">
      {props.policeData &&
        props.policeData.map((crime, index) => {
          return <Crime crime={crime} key={index} />;
        })}
    </div>
  );
};

export default Crimes;
