//Importações Externas
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//Importações Internas
import {WeatherReducerState } from 'types/interfaces';

const initialState: WeatherReducerState = {
  weatherData:[],
  cityData: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: { 
    setWeatherData(state, action: PayloadAction<object>){
      state.weatherData = action.payload; 
    }, 
    setcityData(state, action: PayloadAction<object>){
      state.cityData = action.payload; 
    },  
  },
});

export const { setWeatherData, setcityData, } = weatherSlice.actions;
export default weatherSlice.reducer;
