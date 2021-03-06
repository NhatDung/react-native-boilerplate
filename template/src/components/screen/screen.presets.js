import {isNil} from 'ramda';
import {color} from '../../theme';

/**
 * All screen keyboard offsets.
 */
export const offsets = {
  none: 0,
};

/**
 * The variations of keyboard offsets.
 */

/**
 * All the variations of screens.
 */
export const presets = {
  /**
   * No scrolling. Suitable for full-screen carousels and components
   * which have built-in scrolling like FlatList.
   */
  fixed: {
    outer: {
      backgroundColor: color.background,
      flex: 1,
      height: '100%',
    },
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: '100%',
      width: '100%',
    },
  },

  /**
   * Scrolls. Suitable for forms or other things requiring a keyboard.
   *
   * Pick this one if you don't know which one you want yet.
   */
  scroll: {
    outer: {
      backgroundColor: color.background,
      flex: 1,
      height: '100%',
    },
    inner: {justifyContent: 'flex-start', alignItems: 'stretch'},
  },
};

/**
 * The variations of screens.
 */

/**
 * Is this preset a non-scrolling one?
 *
 * @param preset The preset to check
 */
export function isNonScrolling(preset) {
  // any of these things will make you scroll
  return (
    isNil(preset) ||
    !preset.length ||
    isNil(presets[preset]) ||
    preset === 'fixed'
  );
}
