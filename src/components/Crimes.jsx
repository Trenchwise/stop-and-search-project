import React from "react";
import Crime from "./Crime";

const Crimes = (props) => {
  return (
    props.policeData &&
    props.policeData.map((crime) => {
      // can live in a component crime
      return <Crime crime={crime} />;
    })
  );
};

export default Crimes;
