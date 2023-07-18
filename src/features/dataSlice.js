import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
  crimes: [],
};

export const dataSlice = createSlice({
  name: "policeData",
  initialState,

  reducers: {
    setPoliceData: (state, action) => {
      state.crimes = action.payload;
    },

    setCoords: (state, action) => {
      //stores data
      state.coords = action.payload;
    },
  },
});

export const { setPoliceData, setCoords } = dataSlice.actions;

//makes availble to the component the things that live in the store
export const selectPoliceData = (state) => state.data.crimes;
export const selectCoords = (state) => state.data.coords;

export default dataSlice.reducer;
