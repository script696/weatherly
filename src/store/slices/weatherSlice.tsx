import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { handleWeatherData } from "../../utils/handleWeatherData";
import axios from "axios";
import { IcurrentDate, IcurrentWeather, IdailyForecast, IinitialState, Iresponse, ItomorrowForecast, IweatherResponse, IweeklyForecast } from "../types/types";
import { RejectedWithValueActionFromAsyncThunk } from "@reduxjs/toolkit/dist/matchers";



const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6176&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=Europe%2FMoscow";


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
const response : Iresponse = {
  status: -0,
  error: '',
};

const initialState: IinitialState = {
  currentWeather,
  currentDate,
  dailyForecast,
  tomorrowForecast,
  weeklyForecast,
  response,
};

export const fetchWeather: any = createAsyncThunk(
  "weather/fetchWeather",
  async (_, { rejectWithValue })=> {
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
    [fetchWeather.fulfilled]: (state : any, action: any) => {
      state.status = "resolved";

      const dailyForecast = handleWeatherData({
        data: action.payload,
      });


      state.currentWeather = { ...dailyForecast.currentWeather };
      state.currentDate = { ...dailyForecast.currentDateData };
      state.dailyForecast = { ...dailyForecast.dailyForecast };
      state.tomorrowForecast = { ...dailyForecast.tomorrowForecast };
      state.weeklyForecast = { ...dailyForecast.weeklyForecast };
    },
    [fetchWeather.rejected]: (state: any, action: any) => {
      state.response.status = "rejected";
      state.response.error = action.payload;
    },
  },
});

export const { setWeatherLoading } = weatherSliceReducer.actions;

export default weatherSliceReducer.reducer;
