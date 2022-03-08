/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@ui-kitten/components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import theme from 'theme/theme.json';
import store from 'store';
import NavigationStack from 'routes/NavigationStack';

Ionicons.loadFont();
 
const App = () => {
  return (
    <Provider store={store}>
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{...eva.light, ...theme }}> 
          <StatusBar
            barStyle="dark-content"
            backgroundColor={theme['color-primary-500']}
            networkActivityIndicatorVisible
            showHideTransition="fade"
          /> 
          <NavigationStack />
        </ApplicationProvider>
      </>
    </Provider>
  );
};

export default App;
