import { WEATHER_CODES, WEEKS_DAYS } from "../constants";
import getDay from "./getDay";

const getWeeklyForecast = ({
  temperature_2m_max,
  temperature_2m_min,
  weathercode,
}: any) => {
  const currenDay: string = getDay("today");
  const indexOfCurrentDay = WEEKS_DAYS.indexOf(currenDay);
  const weekDayArr = [
    ...WEEKS_DAYS.slice(indexOfCurrentDay),
    ...WEEKS_DAYS.slice(0, indexOfCurrentDay),
  ];
const roundedMaxTemp = temperature_2m_max.map((val : number)  => Math.round(val))
const roundedMinTemp = temperature_2m_min.map((val : number)  => Math.round(val))
const weatherCommonArr = weathercode.map((val : number) => WEATHER_CODES[val])
  return {
    dayName: weekDayArr,
    temperatureMax: roundedMaxTemp,
    temperatureMin: roundedMinTemp,
    weathercode: weathercode,
    weatherCommon: weatherCommonArr,
  };
};


export default getWeeklyForecast