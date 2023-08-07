import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getTodayWeatherApiData from '../../api/todayWeatherApi';
import getPredictedWeatherApiData from '../../api/fiveDaysWeatherApi';
import getGeoCodeAndCityNames from '../../api/geocodeApi';

export const fetchTodayWeatherData = createAsyncThunk(
  'data/fetchTodayWeatherData',
  async ({ lat, lon }) => {
    return getTodayWeatherApiData(lat, lon);
  }
);

export const fetchPredictedWeatherData = createAsyncThunk(
  'data/fetchPredictedWeatherData',
  async ({ lat, lon }) => {
    return getPredictedWeatherApiData(lat, lon);
  }
);

export const fetchGeoCodeAndCityNames = createAsyncThunk(
  'data/fetchGeoCodeAndCityNames',
  async (location) => {
    return getGeoCodeAndCityNames(location);
  }
);

const initialState = {
  todayWeatherData: [],
  searchCityName: '',
  selectCityName: '',
  cityApiData: '',
  predictedWeatherData: [],
  loading: false,
  error: false,
};

export const weatherSlice = createSlice({
  name: 'getWeatherDetails',
  initialState,
  reducers: {
    setSearchCityName: (state, action) => {
      state.searchCityName = action.payload;
    },
    setSelectCityName: (state, action) => {
      state.selectCityName = action.payload;
    },
    // setCityName: (state, action) => {
    //   state.cityName = action.payload;
    // },
    resetSearchCityName: (state) => {
      state.selectCityName = '';
    },
    resetTodayWeatherData: (state) => {
      state.todayWeatherData = [];
    },
    resetPredictedWeatherData: (state) => {
      state.predictedWeatherData = [];
    },
  },
  extraReducers: (builder) => {
    //todayWeatherData
    builder
      .addCase(fetchTodayWeatherData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodayWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.todayWeatherData = action.payload;
      })
      .addCase(fetchTodayWeatherData.rejected, (state) => {
        state.loading = true;
        state.error = true;
      });
    //predictedWeatherData
    builder
      .addCase(fetchPredictedWeatherData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPredictedWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.predictedWeatherData = action.payload;
      })
      .addCase(fetchPredictedWeatherData.rejected, (state) => {
        state.loading = true;
        state.error = true;
      });
    //get cities name and lat and log
    builder
      .addCase(fetchGeoCodeAndCityNames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGeoCodeAndCityNames.fulfilled, (state, action) => {
        state.loading = false;
        state.cityApiData = action.payload;
      })
      .addCase(fetchGeoCodeAndCityNames.rejected, (state) => {
        state.loading = true;
        state.error = true;
      });
  },
});

export default weatherSlice.reducer;
export const {
  setSearchCityName,
  setSelectCityName,

  resetSearchCityName,
  resetTodayWeatherData,
  resetPredictedWeatherData,
} = weatherSlice.actions;
