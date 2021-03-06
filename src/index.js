import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

import {transparent} from './resources/colors';

/**
 * Essa função Retorna o app em si
 *
 * @returns {React.Component}
 */
const App = () => {
  return (
    <>
      <StatusBar backgroundColor={transparent} translucent />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;
