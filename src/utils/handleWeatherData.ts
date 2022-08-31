const WEATHER_CODES: { [n: string]: string } = {
  "0": "Clear sky",
  "1": "Mainly clear",
  "2": "Party Cloud",
  "3": "Overcast",
  "45": "Fog",
  "48": "Fog",
  "51": "Drizzle (light)",
  "53": "Drizzle (moderate)",
  "55": "Drizzle (dense)",
  "56": "Freezing Drizzle (light)",
  "57": "Freezing Drizzle (heavy)",
  "61": "Rain (slight)",
  "63": "Rain (moderate)",
  "65": "Rain (heavy)",
  "66": "Freezing Rain (light)",
  "67": "Freezing Rain (heavy)",
  "71": "Snow fall (slight)",
  "73": "Snow fall (moderate)",
  "75": "Snow fall (heavy)",
  "77": "Snow grains",
  "80": "Rain showest (slight)",
  "81": "Rain showest (moderate)",
  "82": "Rain showest (heavy)",
  "85": "Snow showers (slight)",
  "86": "Snow showers (heavy)",
  "95": "Thunderstorm",
  "99": "Thunderstorm (hail)",
};

const MONTH_INDEX: { [n: string]: string } = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "Jule",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December",
};
var WEEKS_DAYS = [
  "Sun",
  "Mon",
  "Tues",
  "Wed",
  "Thurs",
  "Fri",
  "Satur",
];

const getDay = (whatDay: string): string => {
  const dayIndex = new Date().getDay();

  switch (whatDay) {
    case "today":
      return WEEKS_DAYS[dayIndex];
    case "tomorrow":
      return WEEKS_DAYS[dayIndex + 1];
    default:
      return "";
  }
};

const getCurrentWeather = (
  currentWeather: any,
  relativehumidity_2m: Array<number>,
  startIndex: number
) => {
  const humidity = relativehumidity_2m[startIndex];
  const weatherTextStatus = WEATHER_CODES[currentWeather.weathercode];

  return { ...currentWeather, humidity, weatherTextStatus };
};

const getCurrentDateData = (currentTime: string) => {
  const currentMonth = MONTH_INDEX[currentTime.split("-")[1]];
  const currentDay = currentTime.split("-")[2].slice(0, 2);

  return { currentMonth, currentDay };
};
const getDailyForecast = (
  time: Array<string>,
  startIndex: number,
  temperature_2m: Array<number>,
  hourlyWeathercode: Array<any>
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

const handleWeatherData = (data: any) => {
  console.log(data);
  
  const {
    current_weather,
    daily,
    hourly: {
      relativehumidity_2m,
      temperature_2m,
      time,
      weathercode: hourlyWeathercode,
    },
  } = data.data;

  const currentTime = current_weather.time;
  const startIndex = time.indexOf(currentTime);

  const currentWeather = getCurrentWeather(
    current_weather,
    relativehumidity_2m,
    startIndex
  );

  const currentDateData = getCurrentDateData(currentTime);

  const dailyForecast = getDailyForecast(
    time,
    startIndex,
    temperature_2m,
    hourlyWeathercode
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
