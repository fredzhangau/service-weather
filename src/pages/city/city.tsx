import React, { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import { RouteComponentProps, withRouter } from "react-router-dom";
import DetailedCard from "./DetailedCard";
import Forecast from "./Forecast";
import ErrorPage from "../error";
import { Row } from "../../components/basics";
import { LoadingIndicator } from "../../components/layout";
import { ICity, ICoord, IPage, ICurrent, IForecast } from "../../interfaces";
import { getCurrent, getForecast } from "../../utils/api";
import { parseCurrent, parseForecast } from "../../utils/parseWeather";

const CityPage: React.FC<IPage & RouteComponentProps<any>> = (props) => {
  const [currentData, setCurrentData] = useState<ICurrent | null>();
  const [forecastData, setForecastData] = useState<IForecast | null>();

  const { city, state, country } = props.match.params;

  const desCity: ICity[] = [
    {
      name: city,
      state: state,
      country: country,
    },
  ];

  const getWeatherData = async (city: ICity[]) => {
    const currentResult = await trackPromise(getCurrent(city));

    // If error occurs for the OpenWeather API call, render the error component
    if (
      currentResult[0].status !== "fulfilled" ||
      currentResult[0].value.status !== 200
    ) {
      setCurrentData(null);
      setForecastData(null);
    }
    // Otherwise, get the forecast
    else {
      const parsedCurData = parseCurrent(city[0], currentResult[0].value);

      const cityCoord: ICoord = {
        lat: parsedCurData.coord.lat,
        lon: parsedCurData.coord.lon,
      };

      const result = await trackPromise(getForecast(cityCoord));

      // If error occurs for the OpenWeather API call, render the error component
      if (result.status !== 200) {
        setCurrentData(null);
        setForecastData(null);
      }
      // Otherwise, display the weather information for the selected city
      else {
        const parsedForData = parseForecast(result);
        setCurrentData(parsedCurData);
        setForecastData(parsedForData);
      }
    }
  };

  useEffect(() => {
    // Load weather data from Open Weather API and set the state
    getWeatherData(desCity); // eslint-disable-next-line
  }, [city, state, country]);

  return (
    <LoadingIndicator>
      {!currentData || !forecastData ? (
        <ErrorPage name="Error" />
      ) : (
        <Row margin="16px">
          <DetailedCard currentData={currentData} forecastData={forecastData} />
          <Forecast forecastData={forecastData} />
        </Row>
      )}
    </LoadingIndicator>
  );
};
export default withRouter(CityPage);
