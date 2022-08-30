import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { handleWeatherData } from "../../utils/handleWeatherData";
import axios from "axios";
import {
  IcitysCoord,
  IcurrentCity,
  IcurrentDate,
  IcurrentWeather,
  IdailyForecast,
  IinitialState,
  Iresponse,
  ItomorrowForecast,
  IweeklyForecast,
} from "../types/types";
import { RejectedWithValueActionFromAsyncThunk } from "@reduxjs/toolkit/dist/matchers";

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
  status: -0,
  error: "",
};

const currentCityName: any = { name: "Moscow" };

const currentCityCoord: any = {
  latitude: "55.75",
  longitude: "37.62",
};

const initialState: any = {
  currentWeather,
  currentDate,
  dailyForecast,
  tomorrowForecast,
  weeklyForecast,
  response,
  citysCoord,
  currentCityCoord,
  currentCityName,
  update: true,
  timeFromLastUpdate: 0,
};

export const fetchWeather: any = createAsyncThunk(
  "weather/fetchWeather",
  async ({ latitude, longitude }: any, { rejectWithValue }) => {
    try {
      const data = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=Europe%2FMoscow`
      );

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
    setCurrentCity: (state, action) => {
      state.currentCityName.name = action.payload;
      state.currentCityCoord = { ...citysCoord[action.payload] };
    },
    setUpdate: (state) => {
      console.log("setUpdate");
      state.update = true;
    },
    setUpdateTime: (state, action) => {
      state.timeFromLastUpdate += action.payload;

      console.log('+30sec');
      
    },
  },
  extraReducers: {
    [fetchWeather.pending]: (state: any) => {
      state.response.status = "loading";
      state.response.error = null;
      state.timeFromLastUpdate = 0;
      console.log('loading');
      
    },
    [fetchWeather.fulfilled]: (state: any, action: any) => {
      state.status = "resolved";

      state.update = false;

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

export const { setCurrentCity, setUpdate, setUpdateTime } = weatherSliceReducer.actions;

export default weatherSliceReducer.reducer;
