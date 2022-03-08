//Exportações Externas
import React from 'react';
import { View } from 'react-native'; 
import { Text, StyleService, } from '@ui-kitten/components'; 

//Importações Interanas
import { useAppSelector } from 'hooks/store';
import formatarTemp from 'utils/formatarTemp';
  
const Previsao = () => {
  
  const weatherData = useAppSelector(state => state.weatherReducer.weatherData);
      
  return (  
      <View style = {{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 16, paddingHorizontal: 16, backgroundColor: 'rgba(255, 255, 255, 0.0)', alignItems: 'center', borderRadius: 16}}> 
        <Text category={'h6'}>Hoje</Text>
        <Text category={'h6'}>{`${formatarTemp(weatherData.main.temp_min)}/${formatarTemp(weatherData.main.temp_max)}`}</Text>
      </View> 
  );
};
 
export default Previsao;
 
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