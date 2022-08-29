import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6176&hourly=temperature_2m,relativehumidity_2m,showers,weathercode&daily=weathercode&current_weather=true&timezone=Europe%2FMoscow";

interface ICurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number; 
  time: string
}

interface weatherDataState {
  currentWeather: ICurrentWeather;
  relativeHumidity2m: ReadonlyArray<string>;
  temperature2m: ReadonlyArray<string>;
  time: ReadonlyArray<string>;
  weatherCode: ReadonlyArray<string>;
  status: null;
  error: null;
}

interface IPayload {
  payload: {
    time: Array<string>;
    temperature: Array<string>;
  };
}

const currentWeather : ICurrentWeather = {
  temperature: -1000,
  windspeed: -1000,
  winddirection: -1000,
  weathercode: -1000,
  time: '',
}

const initialState: weatherDataState = {
  currentWeather,
  relativeHumidity2m: [""],
  temperature2m: [''],
  time: [''],
  weatherCode: [''],
  status: null,
  error: null,
};

export const fetchWeather: any = createAsyncThunk(
  "weather/fetchWeather",
  async (_, { rejectWithValue }): Promise<any> => {
    try {
      const data = await axios.get(URL);

      if (data.status !== 200) {
        throw new Error("Server Error");
      }
      
      return data.data
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const weatherSliceReducer = createSlice({
  name: "weather",
  initialState,
  reducers: {
    // setWeatherData: (state, action: IPayload) => {
    //   state.time = [...state.time, ...action.payload.time];
    //   state.temperature = [...state.temperature, ...action.payload.temperature];
    // },
    getWeatherData: (state, action: IPayload) => {},
  },
  extraReducers: {
    [fetchWeather.pending]: (state: any) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchWeather.fulfilled]: (state: any, action: any) => {
      state.status = "resolved";
      

      const {current_weather, hourly : {relativehumidity_2m, temperature_2m , time, weathercode}} = action.payload

      state.currentWeather = current_weather
      state.relativeHumidity2m = relativehumidity_2m
      state.temperature2m = temperature_2m
      state.time = time
      state.weatherCode = weathercode

    },
    [fetchWeather.rejected]: (state: any, action: any) => {
      state.status = 'rejected'
      state.error = action.payload;
    },
  },
});

export const { getWeatherData } = weatherSliceReducer.actions;

export default weatherSliceReducer.reducer;
