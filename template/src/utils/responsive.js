import {Dimensions} from 'react-native';

const DESIGN_SCREEN_WIDTH = 375;
const DESIGN_SCREEN_HEIGHT = 812;

const {width: DEVICE_SCREEN_WIDTH, height: DEVICE_SCREEN_HEIGHT} =
  Dimensions.get('screen');

const widthPercent = DEVICE_SCREEN_WIDTH / DESIGN_SCREEN_WIDTH;
const heightPercent = DEVICE_SCREEN_HEIGHT / DESIGN_SCREEN_HEIGHT;

function getWidth(designWidth: number) {
  const result = designWidth * widthPercent;
  return Number(result.toFixed(1));
}

function getHeight(designHeight: number) {
  const result = designHeight * heightPercent;
  return Number(result.toFixed(1));
}

function getFontSize(designWidth: number) {
  return getWidth(designWidth);
}

export const responsive = {
  getWidth,
  getHeight,
  getFontSize,
  WIDTH: DEVICE_SCREEN_WIDTH,
  HEIGHT: DEVICE_SCREEN_HEIGHT,
};
