import {memo} from 'react';
import deepEqual from 'deep-equal';
import {Alert, Platform} from 'react-native';

import base64Encoder from '@/utils/base64Encoder';
import {useInfiniteQuery} from 'react-query';
import {LIMIT_ITEMS} from '@/utils/constant';

export function getImageUrl(path) {
  if (!path) {
    return undefined;
  }
  const encoded = base64Encoder.encode(path);
  return `https://truyentranh24h.net/uploads/images/feature/${encoded}`;
}
export function getCoverImageUrl(path) {
  const encoded = base64Encoder.encode(path);
  const size = base64Encoder.encode('[768,393]');
  return `https://truyentranh24h.net/uploads/images/crop/${size}/${encoded}`;
}

export function removeHtmlTags(html) {
  return html.replace(new RegExp('<[^>]*>', 'g'), '');
}

export function useInfinityFetch(
  getter,
  queryKey,
  currentPageRef,
  callBack = undefined,
) {
  return useInfiniteQuery(
    queryKey,
    async ({pageParam = 1}) => {
      const {data, reachedEnd} = await getter(null, LIMIT_ITEMS, pageParam);
      if (reachedEnd) {
        currentPageRef.current = undefined;
      } else {
        currentPageRef.current = pageParam + 1;
      }
      callBack && callBack(data);
      return data;
    },
    {
      getNextPageParam: () => currentPageRef?.current,
    },
  );
}

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
        text: 'Huỷ',
        onPress: onCancel,
        style: 'cancel',
      },
    ];
  }

  return Alert.alert(title, message, button);
}

export function getErrorMessage(e) {
  try {
    const error = JSON.parse(e);
    showAlert({
      title: 'Lỗi',
      message: error.meta.message,
    });
  } catch (error) {
    showAlert({
      title: 'Lỗi',
      message: 'Đã có lỗi xảy ra!',
    });
  }
}

export const isIOS = Platform.OS === 'ios';

export function getFullName(firstName, lastName) {
  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  }
  return 'Anonymous';
}

export const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const createRandomId = () => {
  return Math.floor(Math.random() * 100);
};
