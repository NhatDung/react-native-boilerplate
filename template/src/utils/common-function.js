import {memo} from 'react';
import deepEqual from 'deep-equal';
import {Alert, Platform} from 'react-native';

export const memoDeepEqual = component => {
  return memo(component, (prevProps, nextProps) =>
    deepEqual(prevProps, nextProps),
  );
};

export function debounce(func, wait) {
  let timeout;

  return function () {
    let context = this,
      args = arguments;

    let executeFunction = function () {
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(executeFunction, wait);
  };
}

export function showAlert({
  title = 'Alert',
  message = 'Message',
  onCancel = undefined,
  onOk = undefined,
}) {
  let button = [{text: 'OK', onPress: onOk}];
  if (onCancel && typeof onCancel === 'function') {
    button = [
      ...button,
      {
        text: 'Cancel',
        onPress: onCancel,
        style: 'cancel',
      },
    ];
  }

  return Alert.alert(title, message, button);
};

export const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const createRandomId = () => {
  return Math.floor(Math.random() * 100);
};
