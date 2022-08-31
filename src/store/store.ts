import { configureStore } from '@reduxjs/toolkit'
import scaleSliceReducer  from './slices/scaleSlice'
import weatherSliceReducer from './slices/weatherSlice'

 const store = configureStore({
  reducer: {
    weather: weatherSliceReducer,
    scale: scaleSliceReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store