import axios from "../helpers/setupAxios";
import { APP_ID } from "../helpers/constants";

export async function getAllCurrency() : Promise<object> {
    return (await axios.get(`/currencies.json`)).data;
};

export async function getLatestRates(base : string) : Promise<object> {
    return (await axios.get(`/latest.json?app_id=${APP_ID}&base=${base}`)).data;
};