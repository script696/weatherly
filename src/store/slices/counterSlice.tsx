import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface weatherDataState {
  time: Array<string>;
  temperature: Array<string>;
}

const initialState: weatherDataState = {
  time: [''],
  temperature: [''],
}

interface IPayload {
  payload: {
    time: Array<string>;
    temperature: Array<string>;
  }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setWeatherData: (state, action: IPayload) => {
      state.time = [...state.time, ...action.payload.time ]
      state.temperature = [...state.temperature, ...action.payload.temperature ]

    },
    getWeatherData: (state, action: IPayload) => {
    },
    
  }
})

export const { setWeatherData, getWeatherData } = counterSlice.actions


export default counterSlice.reducer