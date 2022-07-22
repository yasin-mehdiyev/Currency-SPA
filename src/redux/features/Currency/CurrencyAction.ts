import * as currencyService from "../../../services/CurrencyService";
import { setCurrencies, setLatestRates } from "./CurrencySlice";

export const fetchCurrencyDatas = () => async (dispatch: any) => {
    try {
        const resp = await currencyService.getAllCurrency();
        dispatch(setCurrencies(resp));
    } catch (error) {
        console.log("error",error);
    }
};

export const fetchLatestRates = (base:string) => async (dispatch: any) => {
    try {
        const resp = await currencyService.getLatestRates(base);
        dispatch(setLatestRates(resp));
    } catch (error) {
        console.log("error",error);
    }
};