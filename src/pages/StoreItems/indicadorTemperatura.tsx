//Exportações Externas
import React from 'react';
import { View } from 'react-native'; 
import { Text, StyleService, } from '@ui-kitten/components'; 

//Importações Interanas
import { useAppSelector } from 'hooks/store';
 
  
const IndicadorTemperatura = () => {
  
  const weatherData = useAppSelector(state => state.weatherReducer.weatherData);
   
  return (  
    <View style = {{padding: 48, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <View style = {{flexDirection: 'row'}}>
          <Text category={'h1'} style = {{fontSize: 80}}>{weatherData.main.temp}</Text>
          <Text category={'h4'} style = {{marginTop: 40}}>ºC</Text>
      </View>
      <Text category={'h5'}>{weatherData.weather[0].description}</Text>
    </View> 
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