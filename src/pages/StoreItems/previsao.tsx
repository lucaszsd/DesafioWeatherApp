//Exportações Externas
import React from 'react';
import { View } from 'react-native'; 
import { Text, StyleService, } from '@ui-kitten/components'; 

//Importações Interanas
import { useAppSelector } from 'hooks/store';
import formatarTemp from 'utils/formatarTemp';
import { WeatherDataInterface } from 'types/interfaces';
  
const Previsao = () => {
  
  const weatherData:WeatherDataInterface = useAppSelector(state => state.weatherReducer.weatherData);
  
  return (  
      <View style = {themedStyles.previsaoContainer}> 
        <Text category={'h6'}>Hoje</Text>
        <Text category={'h6'}>{`${formatarTemp(weatherData.main.temp_min)}/${formatarTemp(weatherData.main.temp_max)}`}</Text>
      </View> 
  );
};
 
export default Previsao;
 
const themedStyles = StyleService.create({
    previsaoContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      width: '100%', 
      marginTop: 16, 
      paddingHorizontal: 16, 
      backgroundColor: 'rgba(255, 255, 255, 0.0)', 
      alignItems: 'center', borderRadius: 16
    }, 
  });