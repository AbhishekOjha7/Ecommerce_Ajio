import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/modules/Home/HomeScreen';
import Stores from '../screens/modules/Stores/Stores';
import Account from '../screens/modules/Account/Account';
import Wishlist from '../screens/modules/Wishlist/Wishlist';
import Bag from '../screens/modules/Bag/Bag';
import Electronics from '../screens/modules/Home/Electronics/Electronics';
import Jewelary from '../screens/modules/Home/Jewelary/Jewelary';
const Stack = createStackNavigator();

const screenOptionStyle = {
  // headerStyle: {
  //   backgroundColor: '#9AC4F8',
  // },
  headerShown: false,
  // headerTintColor: 'red',
  // headerBackTitle: 'Back',
};

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Electronics" component={Electronics} />
      <Stack.Screen name="Jewelary" component={Jewelary} />
      {/* <Stack.Screen name="About" component={Stores} /> */}
    </Stack.Navigator>
  );
};

export const StoresStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="storesScreen" component={Stores} />
    </Stack.Navigator>
  );
};
export const AccountStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="AccountScreen" component={Account} />
    </Stack.Navigator>
  );
};
export const WishlistStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="WishlistScreen" component={Wishlist} />
    </Stack.Navigator>
  );
};
export const BagStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="BagScreen" component={Bag} />
    </Stack.Navigator>
  );
};
