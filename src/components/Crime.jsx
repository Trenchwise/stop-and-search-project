import React from "react";

const Crime = (props) => {
  return (
    <div className="crime">
      <p>category: {props.crime.category}</p>
      <p>location type: {props.crime.location_type}</p>
      {props.crime.context && <p>context: {props.crime.context}</p>}
      <p>location: {props.crime.location.street.name}</p>
      {/* // if truthy the access */}
      {props.crime.outcome_status && (
        <p>outcome: {props.crime.outcome_status.category}</p>
      )}
    </div>
  );
};

export default Crime;
