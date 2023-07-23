import React from "react";

const Crime = (props) => {
  return (
    <div className="crime">
      <p className="crimeCategory">category: {props.crime.category}</p>
      <p className="crimeCategory">
        location type: {props.crime.location_type}
      </p>
      {props.crime.context && <p>context: {props.crime.context}</p>}
      <p className="crimeCategory">
        location: {props.crime.location.street.name}
      </p>
      {/* // if truthy the access */}
      {props.crime.outcome_status && (
        <p className="crimeCategory">
          outcome: {props.crime.outcome_status.category}
        </p>
      )}
    </div>
  );
};

export default Crime;
