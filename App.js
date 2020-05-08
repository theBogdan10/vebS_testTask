import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './appStyle.js'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Header from './src/Header/Header';
import Footer from './src/Footer/Footer';
import CalendarComponent from './src/Calendar/CalendarComponent.js';


const fetchFonts = () => {
  return Font.loadAsync({
    'hammersmith': require('./assets/fonts/HammersmithOne-Regular.ttf'),
    'latoRegular': require('./assets/fonts/Lato-Regular.ttf'),
  });
};


const App = () => {

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.context}>
        <Header />
        <CalendarComponent />
        <Footer />
      </View>
    </View>
  );
}


export default App;
