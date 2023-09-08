import React from "react";

const Stop = (props) => {
  return (
    <div className="stopItemWrapper globalCard">
      <p className="stopItem">Type: {props.stop.type}</p>
      <p className="stopItem">Outcome: {props.stop.outcome}</p>
      <p className="stopItem">
        Outcome linked to object of search:
        {props.stop.outcome_linked_to_object_of_search}
      </p>
      <p className="stopItem">Age of person: {props.stop.age_range}</p>
      <p className="stopItem">
        Self defined ethnicity: {props.stop.self_defined_ethnicity}
      </p>
      <p className="stopItem">Gender: {props.stop.gender}</p>
      <p className="stopItem">
        Officer defined ethnicity: {props.stop.officer_defined_ethnicity}
      </p>
    </div>
  );
};

export default Stop;
