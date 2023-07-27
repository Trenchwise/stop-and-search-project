import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  selectCoords,
  selectPoliceData,
  selectStopsData,
  setCoords,
  setPoliceData,
  setStopData,
} from "./features/dataSlice";
import "./App.css";
import Crimes from "./components/Crimes";
import Totals from "./components/Totals";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
// import Stop from "./components/Stop";
import Stops from "./components/Stops";
// import TotalsPieChart from "./components/TotalsPieChart";

const App = () => {
  const dispatch = useDispatch();
  const coords = useSelector(selectCoords); // all coords live here
  const policeData = useSelector(selectPoliceData);
  const stopsData = useSelector(selectStopsData);
  const [loading, setLoading] = useState(false);

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
    getLocation();
  }, []);

  // The function that gets the data
  const getPoliceData = async () => {
    // if no coords dont do anything
    if (!coords) {
      return;
    }
    // Dynamically setting the date for use in the api link. It is set to be -1 the current date, because the police data is two months behind
    // using console log to check that the Date method works
    const now = new Date();

    const crimesAtLocationURL = `https://data.police.uk/api/crimes-at-location?date=${now.getFullYear()}-0${now.getMonth() -
      1}&lat=${coords.latitude}&lng=${coords.longitude}`;
    const stopsStreetURL = `https://data.police.uk/api/stops-street?&date=${now.getFullYear()}-0${now.getMonth() -
      1}&lat=${coords.latitude}&lng=${coords.longitude}`;

    try {
      const crimesAtLocation = await axios.get(crimesAtLocationURL);
      const stopsStreet = await axios.get(stopsStreetURL);

      dispatch(setPoliceData(crimesAtLocation.data));
      dispatch(setStopData(stopsStreet.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPoliceData();
  }, [coords]); // everytime coords change to get location for search by area

  // Setting geolocation
  const onInput = async (e) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=1&appid=17a3e02a9cc47ed1eac90bc2f9c0012a`
      );
      console.log(data);
      setLoading(false);

      if (data.length === 0 && data[0].country != "GB") {
        // if therea are no results or country not GB dont get results
        // if no results then dont look for data
        return;
      }

      dispatch(
        setCoords({
          latitude: data[0].lat,
          longitude: data[0].lon,
        })
      ); //telling store the coords to set
    } catch (error) {}
  };

  // Aggregating the crime data.  Shows the categories and how many occured in each category in the data.
  const totals = {};
  policeData.forEach((crime) => {
    totals[crime.category] = totals[crime.category]
      ? totals[crime.category] + 1
      : 1;
  });
  const totalsAsArray = Object.entries(totals);

  return (
    <div id="pageContainer">
      <div className="crimeApp">
        <Header />
        <Intro />
        {loading && <Loading />}
        <div id="inputBoxWrapper">
          <input
            onInput={onInput}
            type="text"
            placeholder="Enter your area here"
            id="inputBox"
          />
        </div>
        {/* <div id="pieWrapper">
          <TotalsPieChart />
        </div> */}
      </div>

      {/* // showing how many instances are in the data by mapping over the data and returning a value */}

      {policeData.length > 0 && (
        <>
          <Totals totalsAsArray={totalsAsArray} policeData={policeData} />
          <div id="pieChartWrapper">{/* <TotalsPieChart /> */}</div>
          <Crimes policeData={policeData} />{" "}
        </>
      )}
      <Stops stopsData={stopsData} />
      {/* <Stop /> */}
      <Footer />
    </div>
  );
};

export default App;
