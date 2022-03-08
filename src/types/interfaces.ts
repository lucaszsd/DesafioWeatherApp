export interface Breed {
  id: string;
  name: string;
  temperament: string;
  life_span: string;
  image: {
    url: string;
  };
  origin: string;
  weight: {
    imperial: string;
    metric: string;
  },
  height: {
    imperial: string;
    metric: string;
  },
  breed_group: string;
}
 
export interface Product {
  id: string,
  quantity: Number,
  selected: Boolean,
}

export interface ShoppingCartReducerState {
  products: Breed[];
  shoppingCart: Product[];
}

export interface WeatherReducerState {
  weatherData: WeatherDataInterface,
  cityData: object,
}

export interface ControlReducerState {
  cidade: string,
  loadingInformation: boolean,
}

export interface WeatherDataInterface {
  base: string,
  clouds: object,
  cod: number,
  coord: {
    lat: number,
    long: number,
  },
  dt: number,
  id: number,
  main: {
    feels_like: number,
     humidity: number,
     pressure: number,
     temp: number,
     temp_max: number,
     temp_min: number,
  },

  name: string,

  sys: {
    country: string,
    id: number,
    sunrise: number,
    sunset: number,
    type: number,
  },

  timezone: number,
  visibility: number,
  weather: [{
    description: string, 
    icon: string, 
    id: number, 
    main: string,
  }],
  wind: {
    deg: number,
    speed: number,
  }, 
}

  

  