import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {EmptyLayout} from '@/components';
import {palette} from '@/theme';

export function RenderEmpty() {
  return (
    <EmptyLayout>
      <Text style={styles.text}>Không có nội dung để hiển thị</Text>
    </EmptyLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: palette.textColor,
  },
});
