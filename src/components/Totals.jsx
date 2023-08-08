import React from "react";
import Total from "./Total";
import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart";
import { calcTotals } from "../utils/statsCalculator";

const Totals = (props) => {
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
    <div className="crimeTotals">
      <h2 id="crimesByAreaTitle">Crimes in your area</h2>
      <PieChart
        labelPosition={100 - 30}
        style={{
          fontFamily:
            '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
          fontSize: "2px",
        }}
        labelStyle={{
          fill: "#000", // colour of label text
          opacity: 0.75,
          pointerEvents: "none",
          fontSize: "2px", // label font size
        }}
        lineWidth={60} // makes into a donut shape
        segmentsStyle={{ transition: "stroke .2s", cursor: "pointer" }}
        animate
        radius={pieChartDefaultProps.radius - 7}
        center={[50, 50]}
        segmentsShift={(index) => (index === 0 ? 7 : 0.5)}
        data={calcTotals(props.totalsAsArray)} //returning data in the correct format
        label={({ dataEntry }) => {
          return dataEntry.title;
        }}
        background="#bfbfbf" // changes background colour
      />

      <h2 id="totalNumberCrimes">
        {" "}
        Total Number {props.policeData && props.policeData.length}
      </h2>
      {props.totalsAsArray.map((total, index) => {
        return (
          // totals component
          <Total total={total} key={index} />
        );
      })}
    </div>
  );
};

export default Totals;
