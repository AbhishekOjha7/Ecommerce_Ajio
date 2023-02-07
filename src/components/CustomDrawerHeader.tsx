import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {images} from '../utils/images';
import {normalize} from '../utils/dimensions';
import {useNavigation} from '@react-navigation/native';

const CustomDrawerHeader = ({onPress}: any) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.mainHead}>
      <TouchableOpacity onPress={onPress}>
        <Image
          resizeMode="contain"
          resizeMethod="resize"
          style={styles.closeIcon}
          source={images.close}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection: 'row'}}>
        <Text style={styles.AjioText}>{'AJIO LUXE'}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.searchIcon} source={images.search} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerHeader;

const styles = StyleSheet.create({
  mainHead: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: normalize(10),
    marginTop: normalize(10),
  },
  downIcon: {
    height: normalize(15),
    width: normalize(15),
    marginTop: 4,
    marginLeft: 6,
  },
  AjioText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
  },
  closeIcon: {
    height: normalize(24),
    width: normalize(22),
  },
  searchIcon: {
    height: normalize(40),
    width: normalize(40),
  },
});
