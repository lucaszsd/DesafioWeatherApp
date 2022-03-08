//Importações Externas
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//Importações Internas
import {ControlReducerState, WeatherReducerState } from 'types/interfaces';

const initialState: ControlReducerState = {
  cidade: 'Recife',
  loadingInformation: true,
};

const controlSlice = createSlice({
  name: 'control',
  initialState,
  reducers: { 
    setCidade(state, action: PayloadAction<string>){
      state.cidade = action.payload; 
    }, 
    setLoading(state, action: PayloadAction<boolean>){
      state.loadingInformation = action.payload; 
    },  
  },
});

export const { setCidade, setLoading,} = controlSlice.actions;
export default controlSlice.reducer;
