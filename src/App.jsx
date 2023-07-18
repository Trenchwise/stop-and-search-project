import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  selectCoords,
  selectPoliceData,
  setCoords,
  setPoliceData,
} from "./features/dataSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const coords = useSelector(selectCoords); // all coords live here
  const policeData = useSelector(selectPoliceData);

  // gets data stores in the store
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (coords) => {
        dispatch(
          setCoords({
            latitude: coords.coords.latitude,
            longitude: coords.coords.longitude,
          })
        ); //telling store the coords to set
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getPoliceData();
  }, [coords]); // everytime coords change get location

  useEffect(() => {
    getLocation();
  }, []);

  // The function that gets the data
  const getPoliceData = async () => {
    // if no coords dont do anything
    if (!coords) {
      return;
    }

    const now = new Date();
    console.log("hello", now.getFullYear());

    const dataLink = `https://data.police.uk/api/crimes-at-location?date=${now.getFullYear()}-0${now.getMonth() -
      1}&lat=${coords.latitude}&lng=${coords.longitude}`;
    console.log(dataLink);
    try {
      const { data } = await axios.get(dataLink);
      dispatch(setPoliceData(data));
    } catch (error) {
      console.log(error);
    }
  };

  const onInput = async (e) => {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=1&appid=17a3e02a9cc47ed1eac90bc2f9c0012a`
      );
      console.log("get data", data);
      if (data.length == 0) {
        // if no results then dont look for data
        return;
      }

      dispatch(
        setCoords({
          latitude: data[0].lat,
          longitude: data[0].lon,
        })
      ); //telling store the coords to set
    } catch (error) {
      console.log(error);
    }
  };
  // calculate totals
  // let antiSocial = 0;
  // let shoplifting = 0;

  const totals = {};
  policeData.forEach((crime) => {
    totals[crime.category] = totals[crime.category]
      ? totals[crime.category] + 1
      : 1;
  });
  const totalsAsArray = Object.entries(totals);

  return (
    <>
      <input onInput={onInput} type="text" />
      <p>{policeData && policeData.length}</p>
      {totalsAsArray.map((total) => {
        return (
          <p>
            {total[0]}: {total[1]}
          </p>
        );
      })}
      {/* <p>Anti social total: {antiSocial}</p>
      <p>Shoplifting total: {shoplifting}</p> */}
      {policeData &&
        policeData.map((crime) => {
          return (
            <div className="crime">
              <p>category: {crime.category}</p>
              <p>location type: {crime.location_type}</p>
              {crime.context && <p>context: {crime.context}</p>}
              <p>location: {crime.location.street.name}</p>
              {/* why is the below not showing? */}
              {/* // if truthy the access */}
              {crime.outcome_status && (
                <p>outcome: {crime.outcome_status.category}</p>
              )}
            </div>
          );
        })}
    </>
  );
};

export default App;
