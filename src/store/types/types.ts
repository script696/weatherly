export interface IcurrentWeather {
  weathercode: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
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
  status: number;
  error: string;
}

export interface IinitialState {
  currentWeather : IcurrentWeather;
  currentDate : IcurrentDate,
  dailyForecast : IdailyForecast,
  tomorrowForecast : ItomorrowForecast,
  weeklyForecast : IweeklyForecast,
  response : Iresponse,
};

export interface IweatherResponse {
  current_weather : Object;
  daily : Object;
  hourly : Object;
}

