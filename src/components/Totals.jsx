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
      <PieChart
        radius={pieChartDefaultProps.radius - 7}
        center={[50, 50]}
        segmentsShift={(index) => (index === 0 ? 7 : 0.5)}
        data={calcTotals(props.totalsAsArray)} //returning data in the correct format
        label={({ dataEntry }) => {
          console.log(dataEntry);
          return dataEntry.title;
        }}
      />
      <h2 id="totalNumberCrimes">
        {props.policeData && props.policeData.length}
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
