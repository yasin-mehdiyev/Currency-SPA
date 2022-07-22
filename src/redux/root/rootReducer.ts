import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

// Slices
import currencyReducer from '../features/Currency/CurrencySlice';
import uiReducer from '../features/UI/UISlice';

const persistConfig : any = {
    key: 'root',
    storage,
    version: 1,
    whitelist: ['currencies', 'ui']
}

export const rootReducer : any = combineReducers({
    currencies: currencyReducer,
    ui: uiReducer,
});

export const persistedReducer : any = persistReducer(persistConfig, rootReducer);