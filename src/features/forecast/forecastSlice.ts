import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Forecast, ForecastResponse } from "../../shared/types";
import type { AppState } from "../../store";
import { fetchForecast } from "./forecastAPI";

export interface ForecastState {
  forecast: ForecastResponse;
  loading: boolean;
}

export const initialState: ForecastState = {
  forecast: {
    data: [],
    globalIdLocal: 0,
    owner: '',
    country: '',
    dataUpdate: null,
  },
  loading: false,
};

export const getForecastAsync = createAsyncThunk(
  "forecast/fetchForecast",
  async (id: number) => {
    const data = await fetchForecast(id);

    return data;
  }
);

export const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    getForecast: (state, action: PayloadAction<ForecastResponse>) => {
      state.forecast = action.payload;
    },
    resetForecast: (state) => {
      state.forecast = initialState.forecast;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getForecastAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getForecastAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.forecast = action.payload;
      });
  },
});

export const { getForecast, resetForecast } = forecastSlice.actions;

export const selectForecast = (state: AppState) => state.cities;

export default forecastSlice.reducer;
