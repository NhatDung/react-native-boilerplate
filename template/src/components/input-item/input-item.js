import React from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {color} from '../../theme';
import {responsive} from '../../utils';
import {Text} from '../text/text';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  inputIcon: {
    height: 17,
    left: 10,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 12 : 14,
    width: 17,
  },
  inputNoIcon: {
    paddingLeft: 10,
    paddingRight: 12,
  },
  inputSearch: {
    fontSize: responsive.getFontSize(14),
    maxHeight: Platform.OS === 'ios' ? 36 : 40,
    paddingLeft: 34,
    textAlign: 'left',
    width: '100%',
  },
  inputSearchContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'rgba(9, 15, 71, 0.1)',
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 44 : 50,
    marginBottom: 10,
    position: 'relative',
    width: '100%',
  },
  inputWithIcon: {
    paddingRight: 8,
  },
  labelInput: {
    color: 'rgba(9, 15, 71, 0.45)',
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 13.13,
    marginBottom: 5,
  },
  validateMsg: {
    position: 'absolute',
    color: color.textError,
    fontSize: 12,
    top: 0,
    right: 0,
    zIndex: 999,
  },
  container: {position: 'relative'},
});

export function InputItem(props) {
  const {
    defaultValue,
    value,
    onChangText,
    onFocus,
    onBlur,
    showIconSearch,
    textInputStyle,
    style,
    label,
    hiddenLabel,
    labelStyle,
    placeholderTextColor,
    placeholder,
    multiline,
    validateMsg,
    showMessageValidate,
  } = props;
  let inputRef = null;
  return (
    <View style={styles.container}>
      {!hiddenLabel && label.length > 0 && (
        <Text style={[styles.labelInput, labelStyle]}>{label}</Text>
      )}
      {showMessageValidate && (
        <Text style={styles.validateMsg}>{validateMsg}</Text>
      )}
      <TouchableOpacity
        style={[styles.inputSearchContainer, style]}
        activeOpacity={1}
        onPress={() => {
          inputRef.focus();
        }}>
        {showIconSearch && <MaterialCommunityIcons name={'search'} />}
        <TextInput
          ref={ref => {
            inputRef = ref;
          }}
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onChangeText={value => {
            onChangText && onChangText(value);
          }}
          onBlur={() => {
            onBlur && onBlur();
          }}
          onFocus={() => {
            onFocus && onFocus();
          }}
          style={[
            styles.inputSearch,
            !showIconSearch ? styles.inputNoIcon : styles.inputWithIcon,
            textInputStyle,
          ]}
          multiline={multiline}
        />
      </TouchableOpacity>
    </View>
  );
}
InputItem.defaultProps = {
  showIconSearch: false,
  hiddenLabel: true,
  multiline: false,
  showMessageValidate: false,
};
