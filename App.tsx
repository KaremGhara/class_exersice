/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,

  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';





function App(): JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar
       
      />
      <ScrollView contentInsetAdjustmentBehavior='automatic'>

      <View> 
          <Header/>
          <Content/>

      </View>
      <Footer/>

      </ScrollView>

   


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  top:{
    backgroundColor:'yellow'

  }
});

export default App;
