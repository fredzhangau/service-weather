import axios, { AxiosResponse } from "axios";
import { ICity, ICoord } from "../interfaces";
const API_KEY = process.env.REACT_APP_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const getCurrent = async (cities: ICity[]) => {
  const promises: Promise<AxiosResponse<any>>[] = [];

  // Loop through the captial cities and push the Open Weather query into the promise array
  cities.forEach((city) => {
    promises.push(
      axios.get(
        `${BASE_URL}weather?q=${city.name},${city.state},${city.country}&units=metric&appid=${API_KEY}`
      )
    );
  });

  // Wait for all the promises to resolve
  const results = await Promise.allSettled(promises);
  return results;
};

export const getForecast = async (cityCoord: ICoord) => {
  const result = await axios.get(
    `${BASE_URL}onecall?lat=${cityCoord.lat}&lon=${cityCoord.lon}&exclude=minutely&units=metric&appid=${API_KEY}`
  );
  return result;
};
