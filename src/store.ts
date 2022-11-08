import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import regionsReducer from './features/regions/regionsSlice'
import ForecastReducer from './features/forecast/forecastSlice'

export function makeStore() {
  return configureStore({
    reducer: { weather: regionsReducer, cities: ForecastReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
