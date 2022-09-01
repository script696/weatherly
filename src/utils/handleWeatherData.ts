import { IweatherData } from "../store/slices/weatherSlice";
import getCurrentDateData from "./weatherLogic/getCurrentDateData";
import getCurrentWeather from "./weatherLogic/getCurrentWeather";
import getDailyForecast from "./weatherLogic/getDailyForecast";
import getTomorrowForecast from "./weatherLogic/getTomorrowForecast";
import getWeeklyForecast from "./weatherLogic/getWeeklyForecast";


const handleWeatherData = ({current_weather, daily, hourly}: IweatherData ) => {

  const currentTime = current_weather.time;
  const startIndex = hourly.time.indexOf(currentTime);

  const currentWeather = getCurrentWeather(
    current_weather,
    hourly,
    startIndex
  );

  const currentDateData = getCurrentDateData(currentTime);

  const dailyForecast = getDailyForecast(
    hourly,
    startIndex,
  );

  const tomorrowForecast = getTomorrowForecast(daily);
  const weeklyForecast = getWeeklyForecast(daily);

  return {
    currentWeather,
    currentDateData,
    dailyForecast,
    tomorrowForecast,
    weeklyForecast,
  };
};

export { handleWeatherData };
