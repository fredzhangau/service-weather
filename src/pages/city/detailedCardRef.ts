export interface IWeatherRef {
  title: string;
  dataSet: "currentData" | "forecastData";
  contentKey: string[];
}

export const detailedCardRef: IWeatherRef[] = [
  { title: "humidity", dataSet: "currentData", contentKey: ["humidity"] },
  {
    title: "dew point",
    dataSet: "forecastData",
    contentKey: ["today", "dewPoint"],
  },
  { title: "wind", dataSet: "currentData", contentKey: ["wind", "speed"] },
  {
    title: "wind gust",
    dataSet: "currentData",
    contentKey: ["wind", "gust"],
  },
  { title: "pressure", dataSet: "currentData", contentKey: ["pressure"] },
  {
    title: "visibility",
    dataSet: "currentData",
    contentKey: ["visibility"],
  },
  { title: "clouds", dataSet: "currentData", contentKey: ["clouds"] },
  {
    title: "1 hour rain",
    dataSet: "currentData",
    contentKey: ["rain"],
  },
];
