import React from "react";

import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart";
import { calcEthnicities } from "../utils/statsCalculator";

const EthnicityPie = (props) => {
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
    <div className="EthnicityPieWrapper">
      <h2 className="titles">Ethnicity</h2>
      <div className="innerEthnicityPieWrapper">
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
          data={calcEthnicities(props.stopsData)} //returning data in the correct format
          label={({ dataEntry }) => {
            return dataEntry.title + " " + dataEntry.value;
          }}
          background="#1b2d48" // changes background colour
        />
        <div id="EthnicityPieWrapper">
          <h2 className="pieText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EthnicityPie;
