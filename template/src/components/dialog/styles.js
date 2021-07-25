import {StyleSheet} from 'react-native';
import {responsive} from '@/utils';

export const styles = StyleSheet.create({
  backDrop: {
    width: responsive.WIDTH,
    height: responsive.HEIGHT,
    backgroundColor: 'transparent',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
