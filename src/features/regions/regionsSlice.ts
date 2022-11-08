import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Region } from "../../shared/types";
import type { AppState } from "../../store";
import { fetchRegions } from "./regionsAPI";

type selectedRegion = {
  idAreaAviso: number | null,
  globalIdLocal: number | null
}

export interface RegionsState {
  regions: Region[];
  selectedRegion: selectedRegion;
  loading: boolean;
  error: string;
}

export const initialState: RegionsState = {
  regions: [],
  selectedRegion: {
    idAreaAviso: null,
    globalIdLocal: null
  },
  loading: false,
  error: '',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getRegionAsync = createAsyncThunk(
  "regions/fetchRegions",
  async () => {
    const response = await fetchRegions();

    return response;
  }
);

export const regionsSlice = createSlice({
  name: "regions",
  initialState,
  reducers: {
    getRegions: (state, action: PayloadAction<Region[]>) => {
      state.regions = action.payload;
    },
    setRegion: (state, action: PayloadAction<selectedRegion>) => {
      state.selectedRegion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRegionAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRegionAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.regions = action.payload;
      });
  },
});

export const { getRegions, setRegion } = regionsSlice.actions;

export const selectRegions = (state: AppState) => state.weather;

export default regionsSlice.reducer;
