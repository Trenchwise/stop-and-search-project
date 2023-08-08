import React from "react";

const Stop = (props) => {
  return (
    <div className="stopItemWrapper">
      <p className="stopItem">type: {props.stop.type}</p>
      <p className="stopItem">outcome: {props.stop.outcome}</p>
      <p className="stopItem">
        outcome_linked_to_object_of_search:
        {props.stop.outcome_linked_to_object_of_search}
      </p>
      <p className="stopItem">age of person: {props.stop.age_range}</p>
      <p className="stopItem">
        self_defined_ethnicity: {props.stop.self_defined_ethnicity}
      </p>
      <p className="stopItem">gender: {props.stop.gender}</p>
      <p className="stopItem">
        officer_defined_ethnicity: {props.stop.officer_defined_ethnicity}
      </p>
    </div>
  );
};

export default Stop;
