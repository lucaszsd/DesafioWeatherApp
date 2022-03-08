//Importações Externas
import React, { useCallback, useEffect } from 'react';
import { Linking, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SyncStorage from 'sync-storage';

//Importações Internas
import ItemDetail from 'pages/ItemDetail';
import StoreItems from 'pages/StoreItems';
import ShoppingCart from 'pages/ShoppingCart';
import { NAV_KEYS, RouteNames } from './nav_types';
import NavigationService from './NavigationService';

const Stack = createNativeStackNavigator();

function NavigationStack() {
  const [isAppReady, setIsAppReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  const onNavStateChange = useCallback(state => {
    if (__DEV__) {
      SyncStorage.set(NAV_KEYS.PERSISTENCE_KEY, state);
    }
  }, []);

  // Initialize the necessary services that's required before app starts
  const beforeAppStarts = useCallback(async () => {
    try {
      /**
       * Data in the localstorage of the phone can only be accessed asynchronously
       * Initialize sync-storage through which we can access the data synchronously
       */
      await SyncStorage.init();

      // We are persisting the state of screen transition. This helps is coming back to the same page when app reloads
      // It's experimental and hence we are running in the dev environment
      if (__DEV__) {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = SyncStorage.get(NAV_KEYS.PERSISTENCE_KEY);

          if (savedStateString) {
            setInitialState(savedStateString);
          }
        }
      }
    } catch (error) {
      // TODO: Replace console.log with a logger service statement
      console.log('before app start issue', error);

      // Sentry.captureException(err);

      // OR

      // Sentry.captureMessage("Something went wrong"); // custom messages
    } finally {
      setIsAppReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isAppReady) {
      beforeAppStarts();
    }
  }, [beforeAppStarts, isAppReady]);

  // Until the app isn't ready show the splash screen
  if (!isAppReady) {
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      ref={NavigationService.navigationRef}
      onStateChange={onNavStateChange}>
        <Stack.Navigator screenOptions={{ headerShown: false }}> 
          <Stack.Screen name={RouteNames.StoreItems} component={StoreItems} />
          <Stack.Screen name={RouteNames.ShoppingCart} component={ShoppingCart}/>
          <Stack.Screen name={RouteNames.ItemDetail} component={ItemDetail}/> 
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
