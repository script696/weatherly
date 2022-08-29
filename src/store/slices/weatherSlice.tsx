import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { handleWeatherData } from "../../utils/handleWeatherData";
import axios from "axios";

const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6176&hourly=temperature_2m,relativehumidity_2m,showers,weathercode&daily=weathercode&current_weather=true&timezone=Europe%2FMoscow";


  interface ICurrentWeather {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
    humidity: number;
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

  interface IinitialState {
    currentWeather : ICurrentWeather,

  }

const currentWeather: any = {
  temperature: null,
  windspeed: null,
  winddirection: null,
  weathercode: null,
  time: null,
  humidity: null,
  weatherTextStatus: "",
};

const currentDate = {
  currentDay: "",
  currentMonth: "",
};
const dailyForecast = {
  dayTime: null,
  dayTemp: null,
  dayWeatherCode: null,
};

const response = {
  status: null,
  error: null,
};

const initialState: any = {
  currentWeather,
  currentDate,
  dailyForecast,
  response,
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
    setWeatherLoading: (state) => {},
  },
  extraReducers: {
    [fetchWeather.pending]: (state: any) => {
      state.response.status = "loading";
      state.response.error = null;
    },
    [fetchWeather.fulfilled]: (state: any, action: any) => {
      state.status = "resolved";

      const dailyForecast = handleWeatherData({
        data: action.payload,
      });

      state.currentWeather = { ...dailyForecast.currentWeather };
      state.currentDate = { ...dailyForecast.currentDateData };
      state.dailyForecast = { ...dailyForecast.dailyForecast };
    },
    [fetchWeather.rejected]: (state: any, action: any) => {
      state.response.status = "rejected";
      state.response.error = action.payload;
    },
  },
});

export const { setWeatherLoading } = weatherSliceReducer.actions;

export default weatherSliceReducer.reducer;
