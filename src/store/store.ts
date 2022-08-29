import { configureStore } from '@reduxjs/toolkit'
import weatherSliceReducer from './slices/weatherSlice'

 const store = configureStore({
  reducer: {
    weather: weatherSliceReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store