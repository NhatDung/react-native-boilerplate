import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import {styles} from './styles';
import {color} from '@/theme';

const siblings = [];

function showLoading() {
  const sibling = new RootSiblings(
    (
      <View style={styles.backDrop}>
        <ActivityIndicator size={'large'} color={color.primary} />
      </View>
    ),
  );
  siblings.push(sibling);
}

function hideLoading() {
  const sibling = siblings.shift();
  sibling.destroy();
}

const LoadingIndicator = () => {
  return (
    <View style={styles.backDrop}>
      <ActivityIndicator size={'large'} color={color.primary} />
    </View>
  );
};

export {showLoading, hideLoading, LoadingIndicator};
