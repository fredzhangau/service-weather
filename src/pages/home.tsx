import React, { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import { ICity, ICurrent, IPage } from "../interfaces";
import { CityCard } from "../components";
import { Row } from "../components/basics";
import { LoadingIndicator } from "../components/layout";
import { capitalCities } from "../config/cities";
import { getCurrent } from "../utils/api";
import { parseCurrent } from "../utils/parseWeather";
import ErrorPage from "./error";
import { Footer } from "../components/layout/Footer";

const HomePage: React.FC<IPage> = () => {
  const [weatherData, setWeatherData] = useState<ICurrent[] | null>([]);

  const getWeatherData = async (capitalCities: ICity[]) => {
    const results = await trackPromise(getCurrent(capitalCities));

    // Loop through the Open Weather API to check status
    // If success, parse the response, save the parsed data into a temporary array for setting the state
    const tmpWeatherData: ICurrent[] = [];

    results.forEach((result, index) => {
      let parsedData;
      // If error occurs, go to the next one.
      if (result.status !== "fulfilled" || result.value.status !== 200) {
        parsedData = parseCurrent(capitalCities[index]);
      } else {
        parsedData = parseCurrent(capitalCities[index], result.value);
      }
      tmpWeatherData.push(parsedData);
    });

    // Set current weather for the list of cities that has info
    if (tmpWeatherData.length !== 0) setWeatherData(tmpWeatherData);
  };

  useEffect(() => {
    // Load weather data from Open Weather API and set the state
    getWeatherData(capitalCities);
  }, []);

  return (
    <LoadingIndicator>
      {!weatherData ? (
        <ErrorPage name="Error" />
      ) : (
        <Row justifyContent="space-around" margin="24px 0">
          {weatherData.map((weatherData: ICurrent, index) => {
            return <CityCard key={index} weatherData={weatherData} />;
          })}
        </Row>
      )}
      <Footer />
    </LoadingIndicator>
  );
};

export default HomePage;
