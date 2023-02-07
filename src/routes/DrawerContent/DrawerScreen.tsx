import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomDrawerHeader from '../../components/CustomDrawerHeader';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const DrawerScreen = (props: any) => {
  return (
    <SafeAreaView style={{flex: 1, borderWidth: 1, backgroundColor: 'white'}}>
      <CustomDrawerHeader
        onPress={() => {
          props.navigation.closeDrawer();
        }}
      />
    </SafeAreaView>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({});
