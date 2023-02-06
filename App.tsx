import React from 'react';

import {SafeAreaView, StatusBar, View} from 'react-native';

import Home from './src/screens/home';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />

      <View>
        <Home />
      </View>
    </SafeAreaView>
  );
}

export default App;
