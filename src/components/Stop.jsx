import React from "react";

const Stop = (props) => {
  return (
    <>
      {/* <p>object_of_search : {props.stops.object_of_search}</p> */}
      <p>type: {props.stop.type}</p>
      <p>outcome: {props.stop.outcome}</p>
      <p>
        outcome_linked_to_object_of_search:
        {props.stop.outcome_linked_to_object_of_search}
      </p>
      <p>age of person: {props.stop.age_range}</p>
      <p>self_defined_ethnicity: {props.stop.self_defined_ethnicity}</p>
      <p>gender: {props.stop.gender}</p>
      <p>officer_defined_ethnicity: {props.stop.officer_defined_ethnicity}</p>
      <p></p>
    </>
  );
};

export default Stop;
