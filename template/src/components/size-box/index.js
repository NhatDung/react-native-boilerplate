import React from 'react';
import {View} from 'react-native';
import {spacing} from '@/theme';

export const SizedBox = ({
  width = spacing.medium,
  height = spacing.medium,
  backgroundColor = 'transparent',
}) => {
  return <View style={{width, height, backgroundColor}} />;
};
