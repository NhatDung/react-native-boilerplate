import {StyleSheet} from 'react-native';
import { responsive } from "@/utils";

export const BaseStyle = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  flexLarge: {
    flex: 3,
  },
  flexMedium: {
    flex: 2,
  },
  flexSmall: {
    flex: 1,
  },
  fullHeight: {
    height: '100%',
  },
  fullTouchHitSlop: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  fullWidth: {
    width: '100%',
  },
  justiCenter: {
    justifyContent: 'center',
  },
  justiEnd: {
    justifyContent: 'flex-end',
  },
  justiSpaceBetween: {
    justifyContent: 'space-between',
  },
  justiStart: {
    justifyContent: 'flex-start',
  },
  noFlex: {
    flex: undefined,
  },
  row: {
    flexDirection: 'row',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  shadow: {
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,

    shadowRadius: 3.84,
  },
  backDrop: {
    width: responsive.WIDTH,
    height: responsive.HEIGHT,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
