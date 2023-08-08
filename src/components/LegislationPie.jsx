import React from "react";
import Total from "./Total";
import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart";
import { calc } from "../utils/statsCalculator";

const LegislationPie = (props) => {
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
    <div className="OutcomeLinkedPie">
      <PieChart
        radius={pieChartDefaultProps.radius - 7}
        center={[50, 50]}
        segmentsShift={(index) => (index === 0 ? 7 : 0.5)}
        data={calc(props.stopsData)} //returning data in the correct format
        label={({ dataEntry }) => {
          return dataEntry.title + " " + dataEntry.value;
        }}
      />
    </div>
  );
};

export default LegislationPie;
