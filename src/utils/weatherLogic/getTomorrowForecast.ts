import { WEATHER_CODES } from "../constants";

const getTomorrowForecast = ({
  precipitation_sum,
  temperature_2m_max,
  temperature_2m_min,
  weathercode,
  winddirection_10m_dominant,
  windspeed_10m_max,
}: any) => {
  return {
    precipitationSum: Math.round(precipitation_sum[1]),
    temperatureMax: Math.round(temperature_2m_max[1]),
    temperatureMin: Math.round(temperature_2m_min[1]),
    weathercode: weathercode[1],
    weatherCommon: WEATHER_CODES[weathercode[1]],
    winddirection: Math.round(winddirection_10m_dominant[1]),
    windspeedMax: Math.round(windspeed_10m_max[1]),
  };
};

export default getTomorrowForecast