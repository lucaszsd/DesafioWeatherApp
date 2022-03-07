//Importações Internas
import { api } from './'; 
import config from 'utils/config'; 

const getWeatherData = async () => {
  const options = { 
    params: {
        q: 'London,uk',
        lat: '0',
        lon: '0',
        callback: 'test',
        id: '2172797',
        lang: 'null',
        units: 'imperial',
        mode: 'xml'
    },
    headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key':  config.XRAPID_API_KEY,
    } 
  }  

  return await api.get('/weather', options)
}

export default getWeatherData;