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
    <div className="legislationPieWrapper">
      <h2>Legislation used to conduct Stop and Search</h2>
      <div className="innerlegislationPieWrapper">
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
          lineWidth={60} // makes into a donut shape
          segmentsStyle={{ transition: "stroke .2s", cursor: "pointer" }}
          animate
          radius={pieChartDefaultProps.radius - 7}
          center={[50, 50]}
          segmentsShift={(index) => (index === 0 ? 7 : 0.5)}
          data={calc(props.stopsData)} //returning data in the correct format
          label={({ dataEntry }) => {
            return dataEntry.title + " " + dataEntry.value;
          }}
          background="#fefefe" // changes background colour
        />
      </div>
    </div>
  );
};

export default LegislationPie;
