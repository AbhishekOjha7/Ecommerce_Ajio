import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {normalize} from '../utils/dimensions';
import {images} from '../utils/images';
import CustomSearchTextInput from './CustomSearchTextInput';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('screen');

const HeaderSearchTextInput = () => {
  const navigation = useNavigation<any>();

  return (
    // <View style={styles.container}>
    <View style={styles.mainHead}>
      <View style={styles.menuBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image style={styles.menuIcon} source={images.menu} />
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text style={styles.AjioText}>{'AJIO'}</Text>
          <Image style={styles.downIcon} source={images.down} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.bellIcon} source={images.bell} />
        </TouchableOpacity>
      </View>
    </View>
    // </View>
  );
};

export default HeaderSearchTextInput;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
  },
  mainHead: {
    width: width,
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: normalize(10),
    marginTop: normalize(15),
  },
  menuIcon: {
    height: normalize(30),
    width: normalize(30),
  },
  downIcon: {
    height: normalize(15),
    width: normalize(15),
    marginTop: 4,
    marginLeft: 6,
  },
  AjioText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  bellIcon: {
    height: normalize(25),
    width: normalize(25),
  },
});
