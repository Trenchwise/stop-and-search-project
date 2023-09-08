import React from "react";
import Total from "./Total";
import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart";
import { calcTotals } from "../utils/statsCalculator";

const Totals = (props) => {
  // const defaultProps = {
  //   animationDuration: 500,
  //   animationEasing: "ease-out",
  //   center: [50, 50],
  //   data: [],
  //   labelPosition: 50,
  //   lengthAngle: 360,
  //   lineWidth: 100,
  //   paddingAngle: 0,
  //   radius: 50,
  //   startAngle: 0,
  //   viewBoxSize: [100, 100],
  // };
  return (
    <div className="crimeTotals">
      <h1 id="crimesByAreaTitle" className="titles">
        Arrests made in your area
      </h1>
      <div id="totalsAndCrimeWrapper">
        <div id="totalsPiechart">
          <PieChart
            labelPosition={100 - 30}
            style={{
              fontFamily:
                '"Urbanist", -apple-system, Helvetica, Arial, sans-serif',
              fontSize: "10px",
            }}
            labelStyle={{
              fill: "#ffffff", // colour of label text
              opacity: 0.95,
              pointerEvents: "none",
              fontSize: "8px", // label font size
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
            // background="#1b2d48" // changes background colour
          />
        </div>

        <div id="totalNumberCrimesWrapper">
          <p id="totalNumberCrimes">
            {" "}
            Total Number: {props.policeData && props.policeData.length}
          </p>
          {props.totalsAsArray.map((total, index) => {
            return (
              // totals component
              <Total total={total} key={index} />
            );
          })}
        </div>
        {/* <div id="crimeTotalsTextWrapper">
          <h2 id="totalsPieChartText">
            Arrests that have occurred at your specified location
          </h2>
        </div> */}
      </div>
    </div>
  );
};

export default Totals;
