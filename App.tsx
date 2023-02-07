import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/routes/DrawerNav';
import {Provider} from 'react-redux';
import store from './src/redux/store';
const App = () => {
  return (
    // <NavigationContainer>
    //   <DrawerNav />;
    // </NavigationContainer>
    // <DrawerNav />

    //   <Provider store={store}>
    //   <MySearching/>
    //  </Provider>
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
