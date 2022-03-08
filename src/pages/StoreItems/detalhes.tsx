//Exportações Externas
import React from 'react';
import { View } from 'react-native'; 
import {  Text, StyleService, } from '@ui-kitten/components'; 

//Importações Interanas
import { useAppSelector } from 'hooks/store'; 
import formatarTemp from 'utils/formatarTemp';
import { WeatherDataInterface } from 'types/interfaces';
 
  
interface DetailItem { 
  title: string,
  detailData: number,
  unidade: string
}

const Detalhes = () => {
  
  const weatherData:WeatherDataInterface = useAppSelector(state => state.weatherReducer.weatherData);
      
  const data = [
    {title: 'Sensação Termica', detailData: formatarTemp(weatherData.main.feels_like), unidade: 'ºC'},
    {title: 'Umidade', detailData: weatherData.main.humidity, unidade: '%'}, 
    {title: 'Pressão', detailData: weatherData.main.pressure, unidade: 'mbar'},
    {title: 'Vel. do vento', detailData: weatherData.wind.speed, unidade: 'km/h'}, 
  ]

  //Cada dado na lista de dados meteorológicos
  const RenderItem = (item:DetailItem) => { 
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
      <View style = {themedStyles.detalhesContainer}> 
        {data.map((item, index) => <RenderItem key = {index} {...item}/>)} 
      </View> 
  );
};
 
export default Detalhes;
 
const themedStyles = StyleService.create({
  detalhesContainer: {
      width: '100%', 
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 16, 
      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
      justifyContent: 'center', 
      alignItems: 'center', 
      borderRadius: 16
    },   
  });