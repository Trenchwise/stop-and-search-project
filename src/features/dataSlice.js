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
      state.coords = action.payload;
    },

    setStopData: (state, action) => {
      state.stops = action.payload;
    },
  },
});

export const { setPoliceData, setCoords, setStopData } = dataSlice.actions;

//makes availble to the component the things that live in the store
export const selectPoliceData = (state) => state.data.crimes;
export const selectCoords = (state) => state.data.coords;
export const selectStopData = (state) => state.data.stops;

export default dataSlice.reducer;
