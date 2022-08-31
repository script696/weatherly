import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { citysCoord } from "../../utils/constants";
import { handleWeatherData } from "../../utils/handleWeatherData";
import initialState from "../initialState/initialWeatherState";



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

export const { setCurrentCity, setUpdate, setUpdateTime,} =
  weatherSliceReducer.actions;

export default weatherSliceReducer.reducer;
