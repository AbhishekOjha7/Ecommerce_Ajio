import React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {StoresStackNavigator} from './AppStack';
import TabNavigator from './bottomTab';
import DrawerScreen from './DrawerContent/DrawerScreen';

const Drawer = createDrawerNavigator();
const {width} = Dimensions.get('screen');
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {width: width},
      }}
      drawerContent={props => <DrawerScreen {...props} />}>
      <Drawer.Screen name="HomeScreen" component={TabNavigator} />
      {/* <Drawer.Screen name="Storess" component={StoresStackNavigator} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
