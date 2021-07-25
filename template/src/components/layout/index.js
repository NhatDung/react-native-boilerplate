import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView, Edge} from 'react-native-safe-area-context';
import {color} from '@/theme';

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: color.backgroundWhite,
    flex: 1,
  },
});

export const EmptyLayout = props => {
  const {removeSafeEdge = [], backgroundColor, style} = props;
  const safeEdges: Edge[] = ['top', 'bottom', 'left', 'right'];
  const filtered = safeEdges.filter(item => {
    return removeSafeEdge.indexOf(item) < 0;
  });

  return (
    <SafeAreaView
      edges={filtered}
      style={[
        styles.safeContainer,
        (backgroundColor && {backgroundColor}) || null,
        style,
      ]}>
      {props.children}
    </SafeAreaView>
  );
};
