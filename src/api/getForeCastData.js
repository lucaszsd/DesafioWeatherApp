//Importações Internas
import { api } from './'; 
import config from 'utils/config'; 

const getWeatherData = async () => {
  const options = { 
    params: {
        q: 'London,uk',
        lat: '0',
        lon: '0',
        // callback: '',
        id: '2172797',
        lang: 'null',
        units: 'imperial',
        mode: 'json'
    },
    headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key':  config.XRAPID_API_KEY,
    } 
  }  

  return await api.get('/forecast', options)
}

export default getWeatherData;