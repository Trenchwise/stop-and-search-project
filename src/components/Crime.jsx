import React from "react";

const Crime = (props) => {
  return (
    <div className="crime">
      <p className="crimeCategory">Category: {props.crime.category}</p>
      <p className="crimeCategory">
        Location type: {props.crime.location_type}
      </p>
      {props.crime.context && <p>Context: {props.crime.context}</p>}
      <p className="crimeCategory">
        Location: {props.crime.location.street.name}
      </p>
      {/* // if truthy the access */}
      {props.crime.outcome_status && (
        <p className="crimeCategory">
          Outcome: {props.crime.outcome_status.category}
        </p>
      )}
    </div>
  );
};

export default Crime;
