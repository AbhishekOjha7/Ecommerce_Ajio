import React from 'react';
import {StyleSheet, View} from 'react-native';
import Spinner from 'react-native-spinkit';

interface Props {
  isVisible: boolean;
  setFull?: boolean;
}
/**
 * this is used for common app loader which is render until data/API fetch
 * @param {boolean} isVisible - show/hide loader view
 * @param {boolean} setFull - to control show loader at full view
 * @returns
 */
const Loader = ({isVisible, setFull}: Props) => {
  return (
    <View style={[styles.container, setFull && styles.black]}>
      <Spinner isVisible={isVisible} size={80} type="Circle" color={'red'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    flex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 11,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
  },
  spinner: {
    marginBottom: 50,
  },
  black: {
    backgroundColor: 'black',
  },
});

export default Loader;
