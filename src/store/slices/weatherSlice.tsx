import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { handleWeatherData } from "../../utils/handleWeatherData";
import axios from "axios";
import {
  IcurrentCityCoord,
  IcurrentDate,
  IcurrentWeather,
  IdailyForecast,
  IinitialState,
  Iresponse,
  ItomorrowForecast,
  IupdateData,
  IweeklyForecast,
} from "../types/types";

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

const currentCityName: {name : string} = { name: "Moscow" };

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
const initialState: IinitialState = {
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
      state.updateData.update = true;
    },
    setUpdateTime: (state, action) => {
      if (
        state.updateData.timeFromLastUpdate < 60 &&
        state.updateData.units === "sec"
      ) {
        state.updateData.timeFromLastUpdate += action.payload;
      }
      if (state.updateData.timeFromLastUpdate === 60) {
        state.updateData.timeFromLastUpdate = 1;
        state.updateData.units = "min";
        state.updateData.sec += 1;
      }
      if (state.updateData.units === "min") {
        if (state.updateData.sec === 60) {

          state.updateData.timeFromLastUpdate += 1;
          state.updateData.sec = 0;
        } else {

          state.updateData.sec += 1;
        }
      }
    },
  },
  extraReducers: {
    [fetchWeather.pending]: (state: any) => {
      state.response.status = "loading";
      state.response.error = null;
      state.updateData.iconColor = "red";
    },
    [fetchWeather.fulfilled]: (state: any, action: any) => {
      state.status = "resolved";
      state.updateData.update = false;
      state.updateData.units = "sec";
      state.updateData.timeFromLastUpdate = 0;
      state.updateData.iconColor = "green";

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

export const { setCurrentCity, setUpdate, setUpdateTime } =
  weatherSliceReducer.actions;

export default weatherSliceReducer.reducer;
