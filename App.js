import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import { Navigator } from './App/Redux/navigation/Navigator';
import { store } from './App/Redux/store';


function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
