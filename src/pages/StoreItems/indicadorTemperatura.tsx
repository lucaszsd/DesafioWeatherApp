//Exportações Externas
import React from 'react';
import { View } from 'react-native'; 
import { Text, StyleService, } from '@ui-kitten/components'; 

//Importações Interanas
import { useAppSelector } from 'hooks/store';
import formatarTemp from 'utils/formatarTemp';
import { WeatherDataInterface } from 'types/interfaces';
  

//Indicador principal de dado - Mostra a temperatura atual
const IndicadorTemperatura = () => {
  
  const weatherData:WeatherDataInterface = useAppSelector(state => state.weatherReducer.weatherData);
    
  return (  
    <View style = {themedStyles.indicadorContainer}>
      <View style = {{flexDirection: 'row'}}>
          <Text category={'h1'} style = {themedStyles.mainTemperature}>{formatarTemp(weatherData.main.temp)}</Text>
          <Text category={'h4'} style = {themedStyles.unidade}>ºC</Text>
      </View>
      <Text category={'h5'}>{weatherData.weather[0].description}</Text>
    </View> 
  );
};

 
export default IndicadorTemperatura;


const themedStyles = StyleService.create({
    indicadorContainer: {
      padding: 48, 
      width: '100%', 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    mainTemperature: {
      fontSize: 80
    },
    unidade: {
      marginTop: 40
    }
  });