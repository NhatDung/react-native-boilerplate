import {Dimensions, Platform} from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const {height: D_HEIGHT, width: D_WIDTH} = Dimensions.get('window');

export const isIPhoneX = () => {
  return Platform.OS === 'ios'
    ? (D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
        (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT)
    : false;
};

export const initialLayout = {width: Dimensions.get('window').width};
