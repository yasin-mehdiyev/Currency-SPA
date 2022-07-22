import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root/store';
import Currencies from '../../../models/Currencies';

const initialState: Currencies = {
    currencies: [],
    latestRates: [],
    baseCurrency: "",
};

export const currencySlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
      setCurrencies: (state, action) => {
        state.currencies = action.payload;
      },
      setBaseCurrency: (state, action) => {
          state.baseCurrency = action.payload;
      },
      setLatestRates: (state, action) => {
        state.latestRates = Object.entries(action.payload.rates);
      }
    }
  })
  
  export const { setCurrencies, setBaseCurrency, setLatestRates } = currencySlice.actions;

  export const selectCurrencies = (state: RootState) => state.currencies.currencies;
  export const selectBaseCurrency = (state: RootState) => state.currencies.baseCurrency;
  export const selectLatestRates = (state: RootState) => state.currencies.latestRates;
  
  export default currencySlice.reducer;