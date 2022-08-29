interface ICurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: string;
}

interface weatherDataState {
  currentWeather: ICurrentWeather;
  relativeHumidity2m: ReadonlyArray<string>;
  temperature2m: ReadonlyArray<string>;
  time: ReadonlyArray<string>;
  weatherCode: ReadonlyArray<string>;
  dailyForecast: any;
  MONTH_INDEX: object;
  status: null;
  error: null;
}

interface IPayload {
  payload: {
    time: Array<string>;
    temperature: Array<string>;
  };
}


export {}