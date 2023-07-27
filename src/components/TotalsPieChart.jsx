import React from "react";
import { ResponsivePie } from "@nivo/pie";

// Bringing up a strange error message.
// Need to plug in categories from totals - use id {data.crime.category}?

const Pie = () => {
  const sampleData = [
    {
      id: "anti-social-behaviour",
      label: "anti-social-behaviour",
      value: 516,
      color: "hsl(187, 70%, 50%)",
    },
    {
      id: "public-order",
      label: "public-order",
      value: 148,
      color: "hsl(39, 70%, 50%)",
    },
    {
      id: "shoplifting",
      label: "shoplifting",
      value: 299,
      color: "hsl(72, 70%, 50%)",
    },
    {
      id: "theft-from-the-person",
      label: "theft-from-the-person",
      value: 56,
      color: "hsl(182, 70%, 50%)",
    },
    {
      id: "violent-crime",
      label: "violent-crime",
      value: 418,
      color: "hsl(219, 70%, 50%)",
    },
  ];
  const myResponsivePie = (data) => (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );

  return (
    <>
      <div id="pieTin">{myResponsivePie(sampleData)}</div>
    </>
  );
};
export default Pie;
