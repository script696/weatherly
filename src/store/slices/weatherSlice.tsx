import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6176&hourly=temperature_2m,relativehumidity_2m,showers,weathercode&daily=weathercode&current_weather=true&timezone=Europe%2FMoscow";

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
  status: null;
  error: null;
}

interface IPayload {
  payload: {
    time: Array<string>;
    temperature: Array<string>;
  };
}

const currentWeather: ICurrentWeather = {
  temperature: -1000,
  windspeed: -1000,
  winddirection: -1000,
  weathercode: -1000,
  time: "",
};

const initialState: weatherDataState = {
  currentWeather,
  relativeHumidity2m: [""],
  temperature2m: [""],
  time: [""],
  weatherCode: [""],
  dailyForecast: {
    dayTime: null,
    dayTemp: null,
    dayWeatherCode: null,
  },
  status: null,
  error: null,
};

const handleDailyForecast = ({ current_weather, time, temperature_2m, weathercode }: any) => {
  const currentTime = current_weather.time;
  const startIndex = time.indexOf(currentTime);


  const dayTime = time
  .slice(startIndex, startIndex + 24)
  .map((val : string) => val.slice(-5));
  const dayTemp = temperature_2m.slice(startIndex, startIndex + 24)
  .map((val : number) => Math.round(val));
  const dayWeatherCode = weathercode.slice(startIndex, startIndex + 24);

  return{dayTime, dayTemp, dayWeatherCode};
};

export const fetchWeather: any = createAsyncThunk(
  "weather/fetchWeather",
  async (_, { rejectWithValue }): Promise<any> => {
    try {
      const data = await axios.get(URL);

      if (data.status !== 200) {
        throw new Error("Server Error");
      }

      return data.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const weatherSliceReducer = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeatherData: (state, action: IPayload) => {},
    
  },
  extraReducers: {
    [fetchWeather.pending]: (state: any) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchWeather.fulfilled]: (state: any, action: any) => {
      state.status = "resolved";

      const {
        current_weather,
        hourly: { relativehumidity_2m, temperature_2m, time, weathercode },
      } = action.payload;

      state.currentWeather = current_weather;
      state.relativeHumidity2m = relativehumidity_2m;
      state.temperature2m = temperature_2m;
      state.time = time;
      state.weatherCode = weathercode;

      const dailyForecast = handleDailyForecast({ current_weather, time, temperature_2m, weathercode });
      state.dailyForecast = {...dailyForecast}
    },
    [fetchWeather.rejected]: (state: any, action: any) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { getWeatherData} =
  weatherSliceReducer.actions;

export default weatherSliceReducer.reducer;
