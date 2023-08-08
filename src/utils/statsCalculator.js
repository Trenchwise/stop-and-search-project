import { orange } from "@mui/material/colors";

const colors = [
  "red",
  "green",
  "blue",
  "purple",
  "orange",
  "pink",
  "yellow",
  "black",
];

// Legislation pie chart
// Function to calculate what legislation was used in the stop by the police
export const calc = (stopsData) => {
  const legislation = {};
  for (let i = 0; i < stopsData.length; i++) {
    //set counter for legislation if it exists add one, otherwise make it one
    legislation[stopsData[i].legislation] = legislation[
      stopsData[i].legislation
    ]
      ? legislation[stopsData[i].legislation] + 1
      : 1;
  }
  // checking the above has added by the how many of the each type of legislation was envoked during the police stop
  console.log(legislation);

  const legislationData = [];
  for (const item in legislation) {
    legislationData.push({
      title: item,
      value: legislation[item],
      color: colors[Math.floor(Math.random() * colors.length - 2)], // finding a random colour
    });
  }
  console.log(legislationData);
  return legislationData;

  // const selfDefinedEthnicities = {};
  // for (let i = 0; i < stopsData.length; i++) {
  //   selfDefinedEthnicities[
  //     stopsData[i].self_defined_ethnicity
  //   ] = selfDefinedEthnicities[stopsData[i].self_defined_ethnicity]
  //     ? selfDefinedEthnicities[stopsData[i].self_defined_ethnicity] + 1
  //     : 1;
  // }
};

// Outcome linked to object of search piechart
// Adding up trues,
export const calcOutcomes = (stopsData) => {
  let totalTrue = 0;
  for (let i = 0; i < stopsData.length; i++) {
    if (stopsData[i].outcome_linked_to_object_of_search) {
      totalTrue += 1;
    }
  }
  //in the structure that the graph requires
  return [
    { title: "True", value: totalTrue, color: "#E38627" },
    { title: "False", value: stopsData.length - totalTrue, color: "#C13C37" },
  ];
};

// Crime by area pie chart
// Crime by area, putting the totals from the categories into a format the pie graph can accept
export const calcTotals = (totalsAsArray) => {
  const chartData = [];
  totalsAsArray.forEach((chartItem, index) => {
    const item = {};
    item.title = chartItem[0];
    item.value = chartItem[1];
    item.color = colors[index];
    chartData.push(item);
  });
  return chartData;
};
