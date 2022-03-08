//Importações Internas
import { api } from './'; 
import config from 'utils/config'; 

const getWeatherData = async (cidade) => {
  const options = { 
    params: {
        q: `${cidade},br`,
        lat: '0',
        lon: '0',
        callback: '',
        id: '2172797',
        lang: 'null',
        units: 'metric',
        mode: 'json'
    },
    headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key':  config.XRAPID_API_KEY,
    } 
  }  

  return await api.get('/weather', options)
}

export default getWeatherData;