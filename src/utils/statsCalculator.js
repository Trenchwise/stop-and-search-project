export const calc = (stopsData) => {
  console.log(stopsData);
  const ageRanges = {};
  for (let i = 0; i < stopsData.length; i++) {
    //set counter for the age range if the age range exists add one, otherwise make it one
    ageRanges[stopsData[i].age_range] = ageRanges[stopsData[i].age_range]
      ? ageRanges[stopsData[i].age_range] + 1
      : 1;
  }
  console.log(ageRanges);

  const selfDefinedEthnicities = {};
  for (let i = 0; i < stopsData.length; i++) {
    selfDefinedEthnicities[
      stopsData[i].self_defined_ethnicity
    ] = selfDefinedEthnicities[stopsData[i].self_defined_ethnicity]
      ? selfDefinedEthnicities[stopsData[i].self_defined_ethnicity] + 1
      : 1;
  }
  console.log(selfDefinedEthnicities);
};
