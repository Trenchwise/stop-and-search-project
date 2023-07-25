import React from "react";

const Stop = (props) => {
  return (
    <>
      {/* <p>object_of_search : {props.stops.object_of_search}</p> */}
      <p>type : {props.data.stops.type}</p>
      <p>outcome : {props.stops.outcome}</p>
      <p>
        outcome_linked_to_object_of_search :
        {props.stops.outcome_linked_to_object_of_search}
      </p>
      <p>age of person : {props.stops.age_range}</p>
      <p>self_defined_ethnicity : {props.stops.self_defined_ethnicity}</p>
      <p>gender : {props.stops.gender}</p>
      <p>officer_defined_ethnicity : {props.stops.officer_defined_ethnicity}</p>
      <p></p>
    </>
  );
};

export default Stop;
