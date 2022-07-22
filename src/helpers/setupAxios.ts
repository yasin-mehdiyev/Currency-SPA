import axios from "axios";

const API_KEY : string = "https://openexchangerates.org/api";

export default axios.create({
    baseURL: API_KEY
});