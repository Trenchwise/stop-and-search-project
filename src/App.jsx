import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  selectCoords,
  selectPoliceData,
  setCoords,
  setPoliceData,
} from "./features/dataSlice";

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

    const dataLink = `https://data.police.uk/api/crimes-at-location?date=2022-02&lat=${coords.latitude}&lng=${coords.longitude}`;
    try {
      const { data } = await axios.get(dataLink);
      dispatch(setPoliceData(data));
    } catch (error) {
      console.log(error);
    }
  };

  const onInput = async (e) => {
    console.log(e.target.value);
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=1&appid=17a3e02a9cc47ed1eac90bc2f9c0012a`
      );
      if (data.length == 0) {
        // if no results then dont look for data
        return;
      }
      console.log(data);
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

  console.log(policeData);
  return (
    <>
      <input onInput={onInput} type="text" />
      {policeData &&
        policeData.map((crime) => {
          return (
            <>
              <p>{crime.location_type}</p>
              <p>{crime.category}</p>
              <p>{crime.context}</p>
              <p>{crime.location.street.name}</p>
            </>
          );
        })}
    </>
  );
};

export default App;
