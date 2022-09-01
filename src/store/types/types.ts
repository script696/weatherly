export interface IResCurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: string;
}

export interface IdailyWeather {
  precipitation_sum: Array<number>;
  temperature_2m_max: Array<number>;
  temperature_2m_min: Array<number>;
  time: Array<string>;
  weathercode: Array<number>;
  winddirection_10m_dominant: Array<number>;
  windspeed_10m_max: Array<number>;
}

export interface IhourlyWeather {
  time: Array<string>;
  temperature_2m: Array<number>;
  weathercode: Array<number>;
  relativehumidity_2m: Array<number>;
}

export interface IcurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: string;
  humidity: number;
  weatherTextStatus: string;
}

export interface IcurrentDate {
  currentDay: string;
  currentMonth: string;
}

export interface IdailyForecast {
  weathercode: Array<number>;
  dayTime: Array<string>;
  dayTemp: Array<number>;
}

export interface ItomorrowForecast {
  weathercode: number;
  precipitationSum: number;
  temperatureMax: number;
  temperatureMin: number;
  weatherCommon: string;
  winddirection: number;
  windspeedMax: number;
}

export interface IweeklyForecast {
  weathercode: Array<number>;
  dayName: Array<string>;
  temperatureMax: Array<number>;
  temperatureMin: Array<number>;
  weatherCommon: Array<string>;
}
export interface Iresponse {
  status: string;
  error: string;
}

export interface IcitysCoord {
  cityName: string;
  latitude: string;
  longitude: string;
}

export interface IcurrentCityCoord {
  latitude: string;
  longitude: string;
}

export interface IcurrentCityName {
  name: string;
}

export interface IupdateData {
  timeFromLastUpdate: number;
  update: boolean;
  units: string;
  timerInterval: number;
  sec: number;
  iconColor: string;
}

export interface IweatherResponse {
  current_weather: Object;
  daily: Object;
  hourly: Object;
}

export interface IweatherInitialState {
  currentWeather: IcurrentWeather;
  currentDate: IcurrentDate;
  dailyForecast: IdailyForecast;
  tomorrowForecast: ItomorrowForecast;
  weeklyForecast: IweeklyForecast;
  response: Iresponse;
  citysCoord: Array<IcitysCoord>;
  currentCityCoord: IcurrentCityCoord;
  currentCityName: IcurrentCityName;
  updateData: IupdateData;
}

export interface IscaleInitialState {
  scaleVal: number;
}
