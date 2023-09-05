import React from "react";
import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart";
import { calc } from "../utils/statsCalculator";

const LegislationPie = (props) => {
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
    <div className="legislationPieWrapper">
      <h2 className="titles">Legislation used to conduct Stop and Search</h2>
      <div className="innerlegislationPieWrapper">
        <PieChart
          labelPosition={100 - 30}
          style={{
            fontFamily:
              '"Urbanist", -apple-system, Helvetica, Arial, sans-serif',
            fontSize: "5px",
          }}
          labelStyle={{
            fill: "#fff", // colour of label text
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
          data={calc(props.stopsData)} //returning data in the correct format
          label={({ dataEntry }) => {
            return dataEntry.title + " " + dataEntry.value;
          }}
          background="#1b2d48" // changes background colour
        />
        <div>
          <h2 className="pieText">
            In London between January 2023 and June 2023 the top reasons to
            conduct a stop and search controlled substances, stolen goods,
            articles for use in theft and offensive weapons. Stop are also more
            likely to occur between 12- 3am and in spring and summer.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LegislationPie;
