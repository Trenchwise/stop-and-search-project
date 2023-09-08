import React from "react";
import { PieChart, pieChartDefaultProps } from "react-minimal-pie-chart";
import { calcOutcomes } from "../utils/statsCalculator";

const OutcomeLinkedPie = (props) => {
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
            fill: "#ffffff", // colour of label text
            opacity: 0.85,
            pointerEvents: "none",
            fontSize: "10px", // label font size
          }}
          radius={pieChartDefaultProps.radius - 7}
          center={[50, 50]}
          segmentsShift={(index) => (index === 0 ? 7 : 0.5)}
          data={calcOutcomes(props.stopsData)} //returning data in the correct format
          label={({ dataEntry }) => {
            return dataEntry.title + " " + dataEntry.value;
          }}
          // background="#1b2d48" // changes background colour
        />
        <div id="OutcomeLinkedTextWrapper">
          <h2 className="pieText">
            In London between 2023 and June 2023, 65% of stop and searches led
            to no further action. Over half of reasons used to make stop and
            searches did not come to pass.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OutcomeLinkedPie;
