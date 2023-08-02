export const calc = (stopsData) => {
  const ageRanges = {};
  for (let i = 0; i < stopsData.length; i++) {
    //set counter for the age range if the age range exists add one, otherwise make it one
    ageRanges[stopsData[i].age_range] = ageRanges[stopsData[i].age_range]
      ? ageRanges[stopsData[i].age_range] + 1
      : 1;
  }

  const selfDefinedEthnicities = {};
  for (let i = 0; i < stopsData.length; i++) {
    selfDefinedEthnicities[
      stopsData[i].self_defined_ethnicity
    ] = selfDefinedEthnicities[stopsData[i].self_defined_ethnicity]
      ? selfDefinedEthnicities[stopsData[i].self_defined_ethnicity] + 1
      : 1;
  }
};

export const calcTotals = (totalsAsArray) => {
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

  // turning data in pie data
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
