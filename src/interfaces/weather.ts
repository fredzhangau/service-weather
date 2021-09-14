import { ICity, ICoord } from "./";

export interface ICurrent {
  city: ICity;
  coord: ICoord;
  clouds: string;
  feelsLike: string;
  temp: string;
  humidity: string;
  pressure: string;
  rain: string;
  time: string;
  timeZone: string;
  visibility: string;
  weather: IWeather;
  wind: IWind;
}

export interface IForecast {
  today: IDaily;
  hourly: IHourly[];
}

export interface IDaily {
  dewPoint: string;
  rain: string;
  sunrise: string;
  sunset: string;
  tempMax: string;
  tempMin: string;
  uvi: string;
  weather: IWeather;
}

export interface IHourly {
  temp: string;
  time: string;
  weather: IWeather;
}

export interface IWeather {
  description: string;
  icon: string;
}

export interface IWind {
  speed: string;
  gust: string;
}

export interface IDataGroup {
  currentData: ICurrent | null;
  forecastData: IForecast | null;
}

export interface IForecastData {
  forecastData: IForecast | null;
}
