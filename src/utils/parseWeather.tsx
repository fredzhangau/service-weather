import { AxiosResponse } from "axios";
import {
  ICity,
  ICoord,
  ICurrent,
  IDaily,
  IForecast,
  IHourly,
  IWeather,
  IWind,
} from "../interfaces";
import defaultIcon from "../assets/default.png";
const ICON_BASE_URL = "http://openweathermap.org/img/wn/";

export const parseCurrent = (
  city: ICity,
  response?: AxiosResponse<any>
): ICurrent => {
  if (response) {
    const data = response.data;
    const coord: ICoord = {
      lat: data.coord.lat,
      lon: data.coord.lon,
    };
    const weatherData: IWeather = {
      description: data.weather[0].main ?? "-",
      icon: `${ICON_BASE_URL}${data.weather[0].icon}@2x.png` ?? defaultIcon,
    };
    const windData: IWind = {
      speed: (data.wind.speed ?? "-") + "m/s",
      gust: (data.wind.gust ?? "-") + "m/s",
    };

    const dateObj = new Date(data.dt * 1000);
    const readableDate = dateObj.toLocaleTimeString();

    const currentData: ICurrent = {
      city: city,
      coord: coord,
      clouds: (data.clouds.all ?? "-") + "%",
      feelsLike: (parseFloat(data.main.feels_like).toFixed(1) ?? "-") + "°C",
      temp: (parseFloat(data.main.temp).toFixed(1) ?? "-") + "°C",
      humidity: (data.main.humidity ?? "-") + "%",
      pressure: (data.main.pressure ?? "-") + "hPa",
      rain: ((data.rain && data.rain["1h"]) || "0") + "mm",
      time: readableDate,
      timeZone: parseTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone),
      visibility: (data.visibility ?? "-") + "m",
      weather: weatherData,
      wind: windData,
    };
    return currentData;
  } else return errorData(city);
};

const parseTimeZone = (timeZone: string): string => {
  if (
    timeZone === "Australia/Brisbane" ||
    "Australia/Sydney" ||
    "Australia/Melbourne" ||
    "Australia/Hobart" ||
    "Australia/Canberra"
  )
    return "AEST";
  else if (timeZone === "Australia/Adelaide" || "Australia/Darwin")
    return "ACST";
  else if (timeZone === "Australia/Perth") return "AWST";
  return timeZone;
};

const parseToLocalTime = (time: number, timeZone: string): string => {
  const dateObj = new Date(time * 1000);
  const readableDate = dateObj.toLocaleString("en-AU", {
    timeZone,
    timeStyle: "short",
    hour12: false,
  });
  return readableDate;
};

export const parseForecast = (response: AxiosResponse<any>): IForecast => {
  const data = response.data;
  const firstDay = data.daily[0];

  const todayWeather: IWeather = {
    description: firstDay.weather[0].description,
    icon: `${ICON_BASE_URL}${firstDay.weather[0].icon}@2x.png` ?? defaultIcon,
  };

  const today: IDaily = {
    dewPoint: (parseFloat(data.current.dew_point).toFixed(1) ?? "-") + "°C",
    rain: (firstDay.rain ?? "0") + "mm",
    sunrise: parseToLocalTime(firstDay.sunrise, data.timeZone) ?? "-",
    sunset: parseToLocalTime(firstDay.sunset, data.timeZone) ?? "-",
    tempMax: (parseFloat(firstDay.temp.max).toFixed(1) ?? "-") + "°C",
    tempMin: (parseFloat(firstDay.temp.min).toFixed(1) ?? "-") + "°C",
    uvi: firstDay.uvi ?? "-",
    weather: todayWeather,
  };

  const hourly: IHourly[] = [];

  data.hourly.forEach((h: any) => {
    const hWeather: IWeather = {
      description: h.weather[0].description,
      icon: `${ICON_BASE_URL}${h.weather[0].icon}@2x.png`,
    };

    hourly.push({
      temp: parseFloat(h.temp).toFixed(1) + "°C",
      time: parseToLocalTime(h.dt, data.timeZone),
      weather: hWeather,
    });
  });

  const forecastData: IForecast = {
    today: today,
    hourly: hourly.slice(0, 8),
  };

  return forecastData;
};

const errorData = (city: ICity): ICurrent => {
  return {
    city: city,
    coord: { lat: "-", lon: "-" },
    clouds: "N/A %",
    feelsLike: "N/A °C",
    temp: "N/A °C",
    humidity: "N/A %",
    pressure: "N/A hPa",
    rain: "N/A mm",
    time: "N/A",
    timeZone: "",
    visibility: "N/A m",
    weather: {
      description: "Not Available Now",
      icon: defaultIcon,
    },
    wind: {
      speed: "N/A m/s",
      gust: "N/A m/s",
    },
  };
};
