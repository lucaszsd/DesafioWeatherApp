//Exportações Externas
import React, { useEffect, useState } from 'react';
import {
  Button, 
  Layout,
  Text,
  StyleService,
  useStyleSheet, 
  Avatar,
  Spinner,
} from '@ui-kitten/components';
import { useDispatch } from 'react-redux'; 
import TopNavigationHeader from 'components/TopNavigationHeader';
import { FlatList, ListRenderItemInfo, TouchableNativeFeedback, TouchableNativeFeedbackBase, View } from 'react-native'; 

//Importações Interanas
import { useAppSelector } from 'hooks/store';
import { RouteNames } from 'routes/nav_types'; 
import { Breed, Product } from 'types/interfaces';
import NavigationService from 'routes/NavigationService';
import { useFetchBreedsQuery } from 'features/dogs/dogs_api_slice';
import * as ShoppingCartActions from 'features/shoppingCart/shoppingCartSlice';
import * as WeatherActions from 'features/Weather/weatherSlice';
import getWeatherData from 'api/getForeCastData';
import { setcityData, setWeatherData } from 'features/Weather/weatherSlice';
 
  
const IndicadorTemperatura = () => {
  
    const weatherData = useAppSelector(state => state.weatherReducer.weatherData);
    
    console.log(weatherData)

  return (  
      <Layout style = {{padding: 48, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Layout style = {{flexDirection: 'row'}}>
            <Text category={'h1'} style = {{fontSize: 80}}>{weatherData.main.temp}</Text>
            <Text category={'h4'} style = {{marginTop: 40}}>ºC</Text>
        </Layout>
        <Text category={'h5'}>{weatherData.weather[0].description}</Text>
      </Layout> 
  );
};

 
export default IndicadorTemperatura;


const themedStyles = StyleService.create({
    btn: { margin: 16 }, 
    maxFlex: {
      flex: 1, 
    }, 
    centerContent: {
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    card: {
      margin: 16,
    }, 
    contentContainer: {
      paddingHorizontal: 8,
      paddingVertical: 16,
    }, 
    item: {
      paddingVertical: 16,
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center'
    }, 
    temperamentWrapper: {
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center', 
      flexWrap: 'wrap',
    }, 
    temperament: { 
      marginTop: 16,
      marginHorizontal: 8,
      fontWeight: 'bold', 
      textAlign: 'center',
    },
  });