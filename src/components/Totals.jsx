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
      <h2 id="crimesByAreaTitle" className="titles">
        Crimes in your area
      </h2>
      <div id="totalsAndCrimeWrapper">
        <div id="totalsPiechart">
          <PieChart
            labelPosition={100 - 30}
            style={{
              fontFamily:
                '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
              fontSize: "2px",
            }}
            labelStyle={{
              fill: "#ffffff", // colour of label text
              opacity: 0.95,
              pointerEvents: "none",
              fontSize: "5px", // label font size
            }}
            lineWidth={60} // makes into a donut shape
            segmentsStyle={{ transition: "stroke .2s", cursor: "pointer" }}
            animate
            radius={pieChartDefaultProps.radius - 10}
            center={[50, 50]}
            segmentsShift={(index) => (index === 0 ? 7 : 0.5)}
            data={calcTotals(props.totalsAsArray)} //returning data in the correct format
            label={({ dataEntry }) => {
              return dataEntry.title;
            }}
            background="#1b2d48" // changes background colour
          />
          <div id="crimeTotalsTextWrapper">
            <h2 id="totalsPieChartText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h2>
          </div>
        </div>

        <div id="totalNumberCrimesWrapper">
          <p id="totalNumberCrimes">
            {" "}
            Total Number {props.policeData && props.policeData.length}
          </p>
          {props.totalsAsArray.map((total, index) => {
            return (
              // totals component
              <Total total={total} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Totals;
