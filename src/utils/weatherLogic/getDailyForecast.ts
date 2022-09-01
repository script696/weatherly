import { IhourlyWeather } from "../../store/types/types";

const getDailyForecast = (
  {time, temperature_2m, weathercode : hourlyWeathercode} : IhourlyWeather,
  startIndex: number,
) => {
  
  const dayTime = time
    .slice(startIndex, startIndex + 24)
    .map((val: string) => val.slice(-5));

  const dayTemp = temperature_2m
    .slice(startIndex, startIndex + 24)
    .map((val: number) => Math.round(val));

  const weathercode = hourlyWeathercode.slice(startIndex, startIndex + 24);

  return { dayTime, dayTemp, weathercode };
};

export default getDailyForecast