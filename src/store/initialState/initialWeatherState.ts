import { IcurrentCityCoord, IcurrentDate, IcurrentWeather, IdailyForecast, Iresponse, ItomorrowForecast, IupdateData, IweatherInitialState, IweeklyForecast } from "../types/types";

const citysCoord: any = {
  Moscow: {
    latitude: "55.75",
    longitude: "37.62",
  },
  SaintP: {
    latitude: "59.94",
    longitude: "30.31",
  },
  Berlin: {
    latitude: "52.52",
    longitude: "13.41",
  },
  Kiev: {
    latitude: "50.45",
    longitude: "30.52",
  },
  Rome: {
    latitude: "41.89",
    longitude: "12.51",
  },
  Paris: {
    latitude: "48.85",
    longitude: "2.35",
  },
};

const currentWeather: IcurrentWeather = {
  temperature: -0,
  windspeed: -0,
  winddirection: -0,
  weathercode: -0,
  time: "",
  humidity: -0,
  weatherTextStatus: "",
};

const currentDate: IcurrentDate = {
  currentDay: "",
  currentMonth: "",
};
const dailyForecast: IdailyForecast = {
  dayTime: [],
  dayTemp: [],
  weathercode: [],
};

const tomorrowForecast: ItomorrowForecast = {
  precipitationSum: -0,
  temperatureMax: -0,
  temperatureMin: -0,
  weathercode: -0,
  weatherCommon: "",
  winddirection: -0,
  windspeedMax: -0,
};
const weeklyForecast: IweeklyForecast = {
  dayName: [],
  temperatureMax: [],
  temperatureMin: [],
  weathercode: [],
  weatherCommon: [],
};
const response: Iresponse = {
  status: "",
  error: "",
};

const currentCityName: { name: string } = { name: "Moscow" };

const currentCityCoord: IcurrentCityCoord = {
  latitude: "55.75",
  longitude: "37.62",
};

const updateData: IupdateData = {
  timeFromLastUpdate: 0,
  update: false,
  units: "sec",
  timerInterval: 120000,
  sec: 0,
  iconColor: "red",
};
const initialState: IweatherInitialState = {
  currentWeather,
  currentDate,
  dailyForecast,
  tomorrowForecast,
  weeklyForecast,
  response,
  citysCoord,
  currentCityCoord,
  currentCityName,
  updateData,
};

export default initialState