import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import {
  AccountStackNavigator,
  BagStackNavigator,
  HomeStackNavigator,
  StoresStackNavigator,
  WishlistStackNavigator,
} from './AppStack';
import {images} from '../utils/images';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.iconsize}
                source={!focused ? images.home : images.homeButton}
              />
            );
          },
        }}
        name="Home"
        component={HomeStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.iconsize}
                source={focused ? images.store : images.storebutton}
              />
            );
          },
        }}
        name="Stores"
        component={StoresStackNavigator}
      />

      <Tab.Screen
        options={{
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.iconsize}
                source={!focused ? images.profile : images.profile_button}
              />
            );
          },
        }}
        name="Account"
        component={AccountStackNavigator}
      />

      <Tab.Screen
        options={{
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.iconsize}
                source={!focused ? images.heart : images.heart_button}
              />
            );
          },
        }}
        name="Wishlist"
        component={WishlistStackNavigator}
      />

      <Tab.Screen
        options={{
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.iconsize}
                source={!focused ? images.shopping : images.shoping_button}
              />
            );
          },
        }}
        name="Bag"
        component={BagStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  iconsize: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});
