import { API_URL, MADRID_ID, TOKEN } from '../utils/constants';
import axios from 'axios';

export async function getCurrentWeather() {
    const currentWeather = await axios.get(`${API_URL}`, {params: {
        "id": MADRID_ID,
        "appid": TOKEN
    },headers: {
      }
    });
    return {
        currentWeather: currentWeather.data,
    };
};