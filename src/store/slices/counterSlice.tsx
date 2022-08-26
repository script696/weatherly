import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setWeatherData: state => {
      state.value += 1
    },
    getWeatherData: state => {
      state.value -= 1
    },
    
  }
})

export const { setWeatherData, getWeatherData } = counterSlice.actions


export default counterSlice.reducer