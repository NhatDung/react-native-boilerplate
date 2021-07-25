import {StyleSheet, Platform} from 'react-native';
import {responsive} from '@/utils';
import {spacing} from '@/theme';

export const styles = StyleSheet.create({
  centerToolBar: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  hitSlopButton: {
    bottom: 20,
    left: 20,
    right: 20,
    top: 20,
  },
  iconBack: {
    height: responsive.getWidth(18),
    width: responsive.getWidth(18),
  },
  leftToolBar: {
    justifyContent: 'center',
    width: '18%',
  },
  rightToolBar: {
    justifyContent: 'center',
    width: '18%',
  },
  title: {
    fontSize: responsive.getFontSize(16),
    fontWeight: '600',
  },
  toolBarContainer: {
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: spacing.tiny,
    paddingBottom: spacing.small,
  },
});
