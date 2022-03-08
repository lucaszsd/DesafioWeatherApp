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
import { FlatList, ImageBackground, ListRenderItemInfo, TouchableNativeFeedback, TouchableNativeFeedbackBase, View } from 'react-native'; 

//Importações Interanas
import { useAppSelector } from 'hooks/store';
import { RouteNames } from 'routes/nav_types'; 
import { Breed, Product } from 'types/interfaces';
import NavigationService from 'routes/NavigationService';
import { useFetchBreedsQuery } from 'features/dogs/dogs_api_slice';
import * as ShoppingCartActions from 'features/shoppingCart/shoppingCartSlice';
import * as WeatherActions from 'features/Weather/weatherSlice';
import getForecastData from 'api/getForeCastData';
import { setcityData, setWeatherData } from 'features/Weather/weatherSlice';
import IndicadorTemperatura from './indicadorTemperatura';
import getWeatherData from 'api/getWeatherData';
import { ScrollView } from 'react-native-gesture-handler';
import Detalhes from './detalhes';
import Previsao from './previsao';

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


const StoreItems = () => {
  
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
    getWeatherData().then(response =>{ 
      dispatch(WeatherActions.setWeatherData(response.data))
      // dispatch(WeatherActions.setcityData(response.data.city));
      console.log('DATA => ', response.data)
      setLoading(false)
    }).catch(error => {
      console.log('Erro busca de weather ', error) 
      setLoading(false)
    })
  }, [])
 
  const styles = useStyleSheet(themedStyles);
  const { data = [], isFetching } = useFetchBreedsQuery(20);
  
  const cart = useAppSelector(state => state.shoppingCartReducer.shoppingCart); 

  const weatherData = useAppSelector(state => state.weatherReducer.weatherData);
  const cityData = useAppSelector(state => state.weatherReducer.cityData);
 
  // console.log(weatherData)

  // dispatch(ShoppingCartActions.setProductList(data))

  // const shoppingCartData = (id: string) => {  
  //   let shoppingCartItemData:Product = cart.filter(item => item.id == id)[0]
  //   return shoppingCartItemData;
  // }

  if (loading) {
    return (
      <Layout style={[styles.maxFlex, styles.centerContent]}>
        <Spinner/>
      </Layout>
    );
  }
   

  console.log('Clima', weatherData)
  

  // const renderItem = ({ item }: ListRenderItemInfo<Breed>) => {

  //   // const shoppingCartItem = shoppingCartData(item.id)
      
  //   return(
  //     <TouchableNativeFeedback onPress={() => NavigationService.navigate(RouteNames.ItemDetail, item)}>
  //       <View style={styles.item}>
  //         <View style={styles.temperamentWrapper}>
  //           <Avatar size="giant" shape='rounded' style = {{width: 128, height: 128}} source={{ uri: item.image.url }} />
  //           <Text category="h6" style={styles.temperament}>
  //             {item.name}
  //           </Text>
  //         </View>
  //         <View style = {{width:'100%'}}>
  //           {shoppingCartItem ? 
  //             <Button status = {'danger'} style = {styles.btn} onPress={() => dispatch(ShoppingCartActions.removeProductFromCart(item.id))}>Remover</Button>:
  //             <Button status = {'success'} style = {styles.btn} onPress={() => dispatch(ShoppingCartActions.addProductToCart(item.id))}>Adicionar</Button> 
  //           }
  //         </View>
  //       </View>
  //     </TouchableNativeFeedback>
  //   );
  // }

  const bg_image = require('../../../assets/images/gradient_sky.jpg')

  return (
    <Layout style={styles.maxFlex}>  
      <TopNavigationHeader title = {'London'}/> 
      <ImageBackground source = {bg_image} style = {{height: '100%', width: '100%'}}>
        <ScrollView style = {{flex: 1, padding: 16}}> 
          <IndicadorTemperatura/>
          <Previsao/>
          <Detalhes/>
        </ScrollView>
      </ImageBackground> 
    </Layout>
  );
};

// Do this so that sentry can track the name of component names even if the code is minified
// You can also ask metro config to not minify function names but that can increase the file size
StoreItems.displayName = RouteNames.StoreItems;

export default StoreItems;
