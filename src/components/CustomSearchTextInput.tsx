import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {normalize} from '../utils/dimensions';
import {images} from '../utils/images';

type Props = {
  placeholder?: string;
  onChangeText?: Function;
  value?: string;
};
const CustomSearchTextInput = (props: Props) => {
  // const HandleChangeText = () => {};
  return (
    <View style={styles.customMain}>
      <Image
        resizeMode="contain"
        style={styles.searchIcon}
        source={images.search}
      />
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        style={styles.inputStyle}
        placeholderTextColor="black"
        onChangeText={props.onChangeText}
      />
      <Image
        resizeMode="contain"
        style={styles.cameraIcon}
        source={images.camera}
      />
    </View>
  );
};

export default CustomSearchTextInput;

const styles = StyleSheet.create({
  customMain: {
    // flexDirection: 'row',
    marginTop: normalize(15),
    // flex: 1,
  },
  inputStyle: {
    borderWidth: 0,
    backgroundColor: 'white',
    borderRadius: normalize(10),
    height: normalize(50),
    marginHorizontal: normalize(15),
    paddingHorizontal: normalize(40),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    height: normalize(25),
    width: normalize(25),
    position: 'absolute',
    left: normalize(25),
    zIndex: 1,
    marginTop: normalize(11),
  },
  cameraIcon: {
    height: normalize(25),
    width: normalize(25),
    position: 'absolute',
    right: normalize(25),
    zIndex: 1,
    marginTop: normalize(11),
  },
});
