import React from "react";
import Total from "./Total";
import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart";
import { calcOutcomes, calcTotals } from "../utils/statsCalculator";

const OutcomeLinkedPie = (props) => {
  const defaultProps = {
    animationDuration: 500,
    animationEasing: "ease-out",
    center: [50, 50],
    data: [],
    labelPosition: 50,
    lengthAngle: 360,
    lineWidth: 100,
    paddingAngle: 0,
    radius: 50,
    startAngle: 0,
    viewBoxSize: [100, 100],
  };

  return (
    <div className="OutcomeLinkedPieWrapper">
      <h2 id="outcomesTitle" className="titles">
        Did the police find what they were looking for?
      </h2>
      <div className="innerOutcomeLinkedWrapper">
        <PieChart
          labelPosition={100 - 30}
          style={{
            fontFamily:
              '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
            fontSize: "2px",
          }}
          labelStyle={{
            fill: "#888", // colour of label text
            opacity: 0.85,
            pointerEvents: "none",
            fontSize: "px", // label font size
          }}
          radius={pieChartDefaultProps.radius - 7}
          center={[50, 50]}
          segmentsShift={(index) => (index === 0 ? 7 : 0.5)}
          data={calcOutcomes(props.stopsData)} //returning data in the correct format
          label={({ dataEntry }) => {
            return dataEntry.title + " " + dataEntry.value;
          }}
        />
      </div>
    </div>
  );
};

export default OutcomeLinkedPie;
