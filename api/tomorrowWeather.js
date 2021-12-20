import { API_URL, MADRID_ID, TOKEN } from '../utils/constants';
import axios from 'axios';

export async function getTomorrowWeather() {
    const tomorrowWeather = await axios.get(`${API_URL}/forecast`, {params: {
        "id": MADRID_ID,
        "appid": TOKEN,
        
    },headers: {
      }
    });
    return {
        tomorrowWeather: tomorrowWeather.data,
    };
};