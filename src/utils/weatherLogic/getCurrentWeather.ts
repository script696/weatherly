import { IhourlyWeather, IResCurrentWeather } from "../../store/types/types";
import { WEATHER_CODES } from "../constants";

const getCurrentWeather = (
  currentWeather: IResCurrentWeather,
  {relativehumidity_2m} : IhourlyWeather,
  startIndex: number
) => {
  const humidity = relativehumidity_2m[startIndex];
  const weatherTextStatus = WEATHER_CODES[currentWeather.weathercode];

  return { ...currentWeather, humidity, weatherTextStatus };
};

export default getCurrentWeather