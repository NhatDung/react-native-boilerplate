import React from 'react';
import {StyleSheet} from 'react-native';
import {ImageView} from '@/components';
import {Icons} from '../../../assets';
import {responsive} from '@/utils';

export default function RoundedAvatar(props) {
  const {uri, size} = props;

  const source = uri ? {uri} : Icons.avatarDefault;

  const style = size && {width: size, height: size, borderRadius: size / 2};

  return (
    <ImageView
      style={[styles.container, style]}
      source={source}
      resizeMode={'contain'}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: responsive.getWidth(32),
    height: responsive.getWidth(32),
    borderRadius: responsive.getWidth(16),
    backgroundColor: '#F1F1F1',
  },
});
