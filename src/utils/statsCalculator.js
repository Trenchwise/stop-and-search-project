const colors = [
  "#bd6aab", //sig pink, now dark
  "#bd9502", //  sig yellow ffc900
  "#22a094",
  "#F45B69", // bright pink (pink before, too light for white text) #bd6aab
  "#114B5F", //midnight green
  "#553E4E", // eggplant
  "#9EBC9E", //cambridge blue
  "#9EBC9E", // green
  "#2274A5", // UCLA blue
  "#r3f1259",
  "#g3b0c22",
  "#0d4242",
  "#2a420d",
  "#664c14",
  "#662214",
  "#870808",
  "#051a66",
  "#5c4c53",
  "#515c4c",
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

  // formatting for pie chart
  const legislationData = [];
  for (const item in legislation) {
    const randomNumber = Math.floor(Math.random() * (colors.length - 1));
    const randomColor = colors[randomNumber];
    // console.log(randomColor, colors.length, randomNumber);
    legislationData.push({
      title: item,
      value: legislation[item],
      color: randomColor, // finding a random colour
    });
  }
  return legislationData;
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
    { title: "Yes", value: totalTrue, color: "#bd6aab" },
    { title: "No  👀", value: stopsData.length - totalTrue, color: "#ffc900" },
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

// include more ethniticities
const ethnicitiesConverstion = {
  "Black/African/Caribbean/Black British - Any other Black/African/Caribbean background":
    "Black",
  "Black/African/Caribbean/Black British - African": "Black African",
  "Black/African/Caribbean/Black British - Caribbean": "Black Caribbean",
  "Mixed/Multiple ethnic groups - Any other Mixed/Multiple ethnic background":
    "Mixed ethnicity",
  "Mixed/Multiple ethnic groups - White and Asian": "Mixed Asian & White",
  "Mixed/Multiple ethnic groups - White and Black Caribbean":
    "Mixed Black Caribean & White",
  "Other ethnic group - Any other ethnic group": "Other ethnic group",
  "White - Any other White background": "Other white",
  "White - English/Welsh/Scottish/Northern Irish/British": "White",
  "White - Irish": "White - Irish",
  null: "Not provided",
  "Other ethnic group - Not stated": "Not stated",
  "Asian/Asian British - Any other Asian background": "Asian other",
  "Asian/Asian British - Bangladeshi": "Aisan - Bangladeshi",
  "Asian/Asian British - Chinese": "Asian - Chinese",
  "Asian/Asian British - Indian": "Asian - Indian",
  "Asian/Asian British - Pakistani": "Asian - Pakistani",
};

// Ethnicity of assailant pie - why wont it export?
export const calcEthnicities = (stopsData) => {
  const ethnicity = {};
  console.log(ethnicity);
  for (let i = 0; i < stopsData.length; i++) {
    ethnicity[stopsData[i].self_defined_ethnicity] = ethnicity[
      stopsData[i].self_defined_ethnicity
    ]
      ? ethnicity[stopsData[i].self_defined_ethnicity] + 1
      : 1;
  }

  const ethnicityData = [];
  for (const item in ethnicity) {
    ethnicityData.push({
      title: ethnicitiesConverstion[item], // looking up ethnicity item above
      value: ethnicity[item], // problem was here
      color: colors[Math.floor(Math.random() * colors.length - 2)],
    });
  }

  return ethnicityData;
};
