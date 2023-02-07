import Snackbar from 'react-native-snackbar';

export const showSnackbar = (title: string = '') => {
  Snackbar.show({
    duration: 2000,
    numberOfLines: 3,
    textColor: 'red',
    backgroundColor: 'green',
    text: title || 'something went wrong, please try again.',
    action: {
      text: 'Close',
      textColor: 'red',
      onPress: () => {
        Snackbar.dismiss();
      },
    },
  });
};
