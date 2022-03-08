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
import formatarTemp from 'utils/formatarTemp';
 
  
interface DetailItem {
  title: string,
  detailtData: string,
  unidade: string
}

const Detalhes = () => {
  
    const weatherData = useAppSelector(state => state.weatherReducer.weatherData);
    
    // console.log(weatherData)

  const data = [
    {title: 'Sensação Termica', detailData: formatarTemp(weatherData.main.feels_like), unidade: 'ºC'},
    {title: 'Umidade', detailData: weatherData.main.humidity, unidade: '%'}, 
    {title: 'Pressão', detailData: weatherData.main.pressure, unidade: 'mbar'},
    {title: 'Vel. do vento', detailData: weatherData.wind.speed, unidade: 'km/h'},
 
  ]

  const renderItem = ({item}: DetailItem) => {
    // console.log(item)
    return(
      <View style={{padding: 16, width: '50%'}}>
        <Text>
          {item.title} 
        </Text>
        <Text category={'h6'}>
          {item.detailData} {item.unidade}
        </Text>
      </View>
    ) 
    };
  

  return (  
      <View style = {{width: '100%', marginTop: 16, backgroundColor: 'rgba(255, 255, 255, 0.1)', justifyContent: 'center', alignItems: 'center', borderRadius: 16}}> 
        <FlatList
          style={{padding: 16}}
          contentContainerStyle={{width: '100%',}}
          data={data}
          numColumns = {2}
          renderItem={renderItem}
        /> 
      </View> 
  );
};

 
export default Detalhes;


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