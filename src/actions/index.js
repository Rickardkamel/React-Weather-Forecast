import axios from 'axios';

const API_KEY = '6242eb0013f40d4b3646b9db6500b712';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},sv`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}